import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * 声音背包状态类型
 */
export interface SoundBagState {
  sounds: Array<{
    id: string;
    name: string;
    icon: string;
    mp3: string;
  }>;
}

const initialState: SoundBagState = {
  sounds: [],
};

/**
 * 声音背包Slice，管理已收集的声音元素
 */
const soundBagSlice = createSlice({
  name: 'soundBag',
  initialState,
  reducers: {
    addSound(state, action: PayloadAction<SoundBagState['sounds'][number]>) {
      state.sounds.push(action.payload);
    },
    removeSound(state, action: PayloadAction<string>) {
      state.sounds = state.sounds.filter(sound => sound.id !== action.payload);
    },
    setSounds(state, action: PayloadAction<SoundBagState['sounds']>) {
      state.sounds = action.payload;
    },
  },
});

export const { addSound, removeSound, setSounds } = soundBagSlice.actions;
export default soundBagSlice.reducer;
