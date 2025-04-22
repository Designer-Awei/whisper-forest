import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * 场景状态类型
 */
export interface SceneState {
  sceneId: string | null;
  elements: Array<{
    id: string;
    name: string;
    type: string;
    position: { x: number; y: number };
    gif: string;
    soundIcon: string;
    soundMp3: string;
  }>;
}

const initialState: SceneState = {
  sceneId: null,
  elements: [],
};

/**
 * 场景Slice，管理当前场景信息和场景元素
 */
const sceneSlice = createSlice({
  name: 'scene',
  initialState,
  reducers: {
    setScene(state, action: PayloadAction<{ sceneId: string; elements: SceneState['elements'] }>) {
      state.sceneId = action.payload.sceneId;
      state.elements = action.payload.elements;
    },
  },
});

export const { setScene } = sceneSlice.actions;
export default sceneSlice.reducer; 