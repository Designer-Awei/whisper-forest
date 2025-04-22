import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * 设置状态类型
 */
export interface SettingsState {
  volume: number;
  muted: boolean;
  showSettings: boolean;
}

const initialState: SettingsState = {
  volume: 1,
  muted: false,
  showSettings: false,
};

/**
 * 设置Slice，管理音量、是否静音、是否显示设置面板等
 */
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
    setMuted(state, action: PayloadAction<boolean>) {
      state.muted = action.payload;
    },
    setShowSettings(state, action: PayloadAction<boolean>) {
      state.showSettings = action.payload;
    },
  },
});

export const { setVolume, setMuted, setShowSettings } = settingsSlice.actions;
export default settingsSlice.reducer; 