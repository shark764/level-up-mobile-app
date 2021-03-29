import appData from './appDataSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  appData
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
