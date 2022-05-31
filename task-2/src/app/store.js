import { configureStore } from '@reduxjs/toolkit';
import offerReducer from '../features/offer/offerSlice';

export const store = configureStore({
  reducer: {
    offer :offerReducer,
  },
});
