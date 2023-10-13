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
    allProducts: [],
    currentCategory: 15,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        changeCategory: (state: IProductsState, action) => {
            state.currentCategory = action.payload;
        },
        fillterByCategory: (state: IProductsState, action) => {
            let newArr: any = [];
            state.products.forEach(x => x.categories.forEach(d => d.id === action.payload ? newArr.push(x) : x))
            state.products = newArr;
        },
        showAll: (state: IProductsState) => {
            state.products = state.allProducts;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getAllProducts.fulfilled, (state: IProductsState, action) => {
                state.isError = false;
                state.isLoading = false;
                // @ts-expect-error
                state.products = [...state.products, ...action.payload];
                // @ts-expect-error
                state.allProducts = [...state.allProducts, ...action.payload];
            })
            .addCase(getAllProducts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(getAllProducts.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
                state.products = [];
                state.allProducts = [];
            })
    }
});

export const { changeCategory, fillterByCategory, showAll } = productsSlice.actions;
export const currentCategory = (state: any) => state.products.currentCategory;
export const isLoaded = (state: any) => state.products.isLoading;
export const getAll = (state: any) => state.products.products;
export const getAllSaved = (state: any) => state.products.allProducts;
export const productsReducer = productsSlice.reducer;