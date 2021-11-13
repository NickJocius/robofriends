import { configureStore } from '@reduxjs/toolkit';
import robotSearchReducer from '../features/robotSearch/robotSearchSlice';

export const store = configureStore({
    reducer: {
      robotSearch: robotSearchReducer,
  },
})