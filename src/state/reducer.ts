import appData from './appDataSlice';
import signUp from './signUpSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  appData,
  signUp
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
