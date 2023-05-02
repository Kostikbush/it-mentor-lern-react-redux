import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import productReducer from './product/product.slice';
export const store = configureStore({
    reducer: {
        product: productReducer,
    },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
