import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductModelDTO } from '../models/product.model';

type CreateProductValues = Pick<ProductModelDTO, 'title' | 'description'>;

const fetchProductsApi = <T>(): Promise<AxiosResponse<T>> => {
    return new Promise(res => {
        return res(axios.get(PRODUCTS_URL.GetProductList));
    });
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    return (await fetchProductsApi<ProductModelDTO[]>()).data;
});

const createProductsApi = <T>(data: CreateProductValues): Promise<AxiosResponse<T>> => {
    return new Promise(res => {
        return res(
            axios.post(PRODUCTS_URL.GetProductList, {
                ...data,
                price: 13.5,
                image: 'https://i.pravatar.cc',
                category: 'electronic',
            })
        );
    });
};

export const createProducts = createAsyncThunk('product/addNewProducts', async (data: CreateProductValues) => {
    return (await createProductsApi<ProductModelDTO>(data)).data;
});
