import { configureStore } from '@reduxjs/toolkit';
import { pokemoApiSlice } from '../features/pokemons/pokemons-api-slice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemoApiSlice.reducerPath]: pokemoApiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokemoApiSlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
