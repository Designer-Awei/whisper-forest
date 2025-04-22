import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import levelReducer from './levelSlice';
import sceneReducer from './sceneSlice';
import characterReducer from './characterSlice';
import soundBagReducer from './soundBagSlice';
import mixerReducer from './mixerSlice';
import taskReducer from './taskSlice';
import settingsReducer from './settingsSlice';

/**
 * 根Reducer，组合所有功能模块的slice
 */
const rootReducer = combineReducers({
  level: levelReducer,
  scene: sceneReducer,
  character: characterReducer,
  soundBag: soundBagReducer,
  mixer: mixerReducer,
  task: taskReducer,
  settings: settingsReducer,
});

/**
 * Redux全局Store
 */
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 