import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { robotApi } from '../services/robots'
import robotSearchReducer from '../features/robotSearch/robotSearchSlice';

export const store = configureStore({
    reducer: {
        [robotApi.reducerPath]: robotApi.reducer,
        robotSearch: robotSearchReducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(robotApi.middleware),
})

setupListeners(store.dispatch);