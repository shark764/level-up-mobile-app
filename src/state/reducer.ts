import appData from './appDataSlice';
import signUp from './signUpSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { mobileApi } from '@api/mobileQuery';
const rootReducer = combineReducers({
  appData,
  signUp,
  //userData,
  [mobileApi.reducerPath]: mobileApi.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
