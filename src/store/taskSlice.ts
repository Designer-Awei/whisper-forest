import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * 任务进度状态类型
 */
export interface TaskState {
  total: number;
  collected: number;
  hint: string;
}

const initialState: TaskState = {
  total: 0,
  collected: 0,
  hint: '',
};

/**
 * 任务Slice，管理当前任务收集进度和提示
 */
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
    setCollected(state, action: PayloadAction<number>) {
      state.collected = action.payload;
    },
    setHint(state, action: PayloadAction<string>) {
      state.hint = action.payload;
    },
  },
});

export const { setTotal, setCollected, setHint } = taskSlice.actions;
export default taskSlice.reducer; 