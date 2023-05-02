import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../store/store';
import { fetchProducts } from '../services/product-api.service';

export const useProducts = () => {
    const dispatch = useAppDispatch();
    const { products, error, isLoading } = useAppSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return { products, error, isLoading };
};
