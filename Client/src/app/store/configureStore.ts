import { configureStore } from '@reduxjs/toolkit';
import { basketSlice } from './slice/basketSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { catalogSlice } from './slice/catalogSlice';

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
    catalog: catalogSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;