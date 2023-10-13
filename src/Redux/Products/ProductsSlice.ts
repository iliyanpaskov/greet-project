import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./ProductsActions";
import { IProductsData } from "../../Interfaces/interfaces";


interface IPriductsState extends IProductsData {
    isLoading: boolean,
    isError: boolean,
    currentCategory: string,
    categories: [],
}

const initialState: IPriductsState = {
    isLoading: false,
    isError: false,
    currentCategory: '',
    categories: [],
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllProducts.fulfilled, (state: IPriductsState, action) => {
                state.isError = false;
                state.isLoading = false;
                state.currentCategory = '';
                state.categories = [];
                // @ts-expect-error
                state.products =[...state.products, ...action.payload];
            })
            .addCase(getAllProducts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
                // state.currentCategory = '';
                // state.categories = [];
                // state.products = [];
            })
            .addCase(getAllProducts.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
                state.currentCategory = '';
                state.categories = [];
                state.products = [];
            })
    }
});

export const isLoaded = (state:any) =>state.products.isLoading;
export const getAll = (state:any) => state.products.products;
export const productsReducer = productsSlice.reducer;