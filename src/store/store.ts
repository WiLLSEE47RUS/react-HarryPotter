import { AnyAction, configureStore, Dispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { charactersSlice } from './characters/charactersSlice';

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
  },
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch = (): Dispatch<AnyAction> => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
