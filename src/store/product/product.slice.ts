import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ProductStateModel } from '../../models/state/product-state.model';
import { createProducts, fetchProducts } from '../../services/product-api.service';
import { ProductModelDTO } from '../../models/product.model';

const initialState: ProductStateModel = {
    products: [],
    error: null,
    isLoading: true,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = `Something went wrong! Error: ${action.error.message}`;
            });
        builder
            .addCase(createProducts.pending, state => {
                state.isLoading = true;
            })
            .addCase(createProducts.fulfilled, (state, action: PayloadAction<ProductModelDTO>) => {
                state.isLoading = false;
                state.products.unshift(action.payload);
            })
            .addCase(createProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = `Something went wrong! Error: ${action.error.message}`;
            });
    },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
