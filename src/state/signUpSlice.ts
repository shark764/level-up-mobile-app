/**
 * SignUp api calls
 */

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './reducer';
import { signUp } from '../api/signUp.js';
import { UserData } from '@app-types/appData';

const initialState = {
  UserData: {
    email: null,
    password: null
  },
  registerResponse: null
};

export const sendSignUp = createAsyncThunk(
  'signUp/register',
  async (userData: any) => {
    try {
      return await signUp(userData);
    } catch (e) {
      return e.response.data;
    }
  }
);

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setUserData: (state: any, { payload }: PayloadAction<UserData>) => {
      state.UserData = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(sendSignUp.pending, (state) => {
      state.registerResponse = null;
    });
    builder.addCase(sendSignUp.fulfilled, (state, action) => {
      state.registerResponse = action.payload;
    });
    builder.addCase(sendSignUp.rejected, (state) => {
      state.registerResponse = null;
    });
  }
});

export const { setUserData } = signUpSlice.actions;

export const getUserData = (state: RootState) => {
  return state.signUp.UserData;
};

export const getRegisterResponse = (state: RootState) => {
  return state.signUp.registerResponse;
};

export default signUpSlice.reducer;
