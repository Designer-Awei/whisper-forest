import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * 关卡状态类型
 */
export interface LevelState {
  levels: Array<{ id: string; name: string; desc: string; image: string }>;
  currentLevelId: string | null;
}

const initialState: LevelState = {
  levels: [],
  currentLevelId: null,
};

/**
 * 关卡Slice，管理关卡列表和当前选中关卡
 */
const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {
    setLevels(state, action: PayloadAction<LevelState['levels']>) {
      state.levels = action.payload;
    },
    selectLevel(state, action: PayloadAction<string>) {
      state.currentLevelId = action.payload;
    },
  },
});

export const { setLevels, selectLevel } = levelSlice.actions;
export default levelSlice.reducer; 