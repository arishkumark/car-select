import { configureStore } from '@reduxjs/toolkit';
import selectCarReducer from '../features/selectCar/selectCarSlice';

export const store = configureStore({
  reducer: {
    cars: selectCarReducer
  },
});
