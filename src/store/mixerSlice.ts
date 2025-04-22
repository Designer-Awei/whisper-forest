import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * 混音区状态类型
 */
export interface MixerState {
  tracks: Array<{
    id: string;
    soundId: string;
    volume: number;
    startTime: number;
    // 可扩展更多混音参数
  }>;
}

const initialState: MixerState = {
  tracks: [],
};

/**
 * 混音区Slice，管理混音区内的声音元素及其参数
 */
const mixerSlice = createSlice({
  name: 'mixer',
  initialState,
  reducers: {
    addTrack(state, action: PayloadAction<MixerState['tracks'][number]>) {
      state.tracks.push(action.payload);
    },
    removeTrack(state, action: PayloadAction<string>) {
      state.tracks = state.tracks.filter(track => track.id !== action.payload);
    },
    updateTrack(state, action: PayloadAction<{ id: string; data: Partial<MixerState['tracks'][number]> }>) {
      const track = state.tracks.find(t => t.id === action.payload.id);
      if (track) Object.assign(track, action.payload.data);
    },
    setTracks(state, action: PayloadAction<MixerState['tracks']>) {
      state.tracks = action.payload;
    },
  },
});

export const { addTrack, removeTrack, updateTrack, setTracks } = mixerSlice.actions;
export default mixerSlice.reducer; 