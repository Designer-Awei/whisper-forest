import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * 人物状态类型
 */
export interface CharacterState {
  position: { x: number; y: number };
  faceLeft: boolean;
  isMoving: boolean;
  gifSrc: string;
}

const initialState: CharacterState = {
  position: { x: 0, y: 0 },
  faceLeft: false,
  isMoving: false,
  gifSrc: '',
};

/**
 * 人物Slice，管理人物位置、朝向、动画状态
 */
const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setPosition(state, action: PayloadAction<{ x: number; y: number }>) {
      state.position = action.payload;
    },
    setFaceLeft(state, action: PayloadAction<boolean>) {
      state.faceLeft = action.payload;
    },
    setIsMoving(state, action: PayloadAction<boolean>) {
      state.isMoving = action.payload;
    },
    setGifSrc(state, action: PayloadAction<string>) {
      state.gifSrc = action.payload;
    },
  },
});

export const { setPosition, setFaceLeft, setIsMoving, setGifSrc } = characterSlice.actions;
export default characterSlice.reducer;
