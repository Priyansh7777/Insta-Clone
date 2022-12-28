import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authenticationSlice';

export const store = configureStore({
  reducer: {
    auth:authSlice
  },
})