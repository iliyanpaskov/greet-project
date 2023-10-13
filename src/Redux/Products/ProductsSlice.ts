import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./ProductsActions";
import { IProductsData } from "../../Interfaces/interfaces";


interface IProductsState extends IProductsData {
    isLoading: boolean,
    isError: boolean,
    currentCategory: number;
}

const initialState: IProductsState = {
    isLoading: false,
    isError: false,
    products: [],
    currentCategory: 15,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        changeCategory: (state: IProductsState, action) => {
            state.currentCategory = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getAllProducts.fulfilled, (state: IProductsState, action) => {
                state.isError = false;
                state.isLoading = false;
                // @ts-expect-error
                state.products = [...state.products, ...action.payload];
            })
            .addCase(getAllProducts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(getAllProducts.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
                state.products = [];
            })
    }
});

export const { changeCategory } = productsSlice.actions;
export const currentCategory = (state: any) => state.products.currentCategory;
export const isLoaded = (state: any) => state.products.isLoading;
export const getAll = (state: any) => state.products.products;
export const productsReducer = productsSlice.reducer;