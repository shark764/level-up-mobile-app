import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './reducer';
import { AppData } from '@app-types/appData';

// Define the initial state using that type
const initialState: AppData = {
  showPermissionsScreen: true
};

export const appDataSlice = createSlice({
  name: 'appData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAppData: (state, { payload }: PayloadAction<AppData>) => {
      return { ...state, ...payload };
    }
  }
});

export const { setAppData } = appDataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAppData = (state: RootState) => state.appData;

export default appDataSlice.reducer;
