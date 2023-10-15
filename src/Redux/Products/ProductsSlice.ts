import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./ProductsActions";
import { IProduct, IProductsData, ISortParams } from "../../Interfaces/interfaces";


interface IProductsState extends IProductsData {
    isLoading: boolean,
    isError: boolean,
    currentCategory: number;
    sortParams: ISortParams;
}

const initialState: IProductsState = {
    isLoading: false,
    isError: false,
    products: [],
    allProducts: [],
    currentCategory: 15,
    sortParams: {
        pageNumber: 1,
        orderby: 'slug',
        odrer: 'asc',
    }
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        changeCategory: (state: IProductsState, action) => {
            state.currentCategory = action.payload;
        },
        fillterByCategory: (state: IProductsState, action) => {
            if (action.payload !== 15) {
                let newArr: any = [];
                state.products.forEach(x => x.categories.forEach(d => d.id === action.payload ? newArr.push(x) : x))
                state.products = newArr;
            } else {
                state.products = state.allProducts;
            }
        },
        showAll: (state: IProductsState) => {
            state.products = state.allProducts;
        },
        sortProducts: (state: IProductsState, action) => {
            const [orderby, order] = action.payload.split('-');
            state.sortParams.orderby = orderby;
            state.sortParams.odrer = order;
            state.sortParams.pageNumber = 1;
            state.products = [];
            state.allProducts = [];
        },
        setPageNumber: (state: IProductsState) => {
            state.sortParams.pageNumber = state.sortParams.pageNumber + 1;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAllProducts.fulfilled, (state: IProductsState, action) => {
                state.isError = false;
                state.isLoading = false;
                if (state.currentCategory === 15) {
                    // @ts-expect-error
                    state.products = [...state.products, ...action.payload];
                } else {
                    let filteredPayload: IProduct[] = []
                    // @ts-expect-error
                    action.payload.forEach(x => x.categories.forEach(y => y.id === state.currentCategory ? filteredPayload.push(x) : x));
                    state.products = [...state.products, ...filteredPayload]
                    if (filteredPayload.length <= 0 && state.sortParams.pageNumber < 25) {
                        state.sortParams.pageNumber = state.sortParams.pageNumber + 1;
                    }
                }
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

export const { changeCategory, fillterByCategory, showAll, sortProducts, setPageNumber } = productsSlice.actions;
export const sortingParams = (state: any) => state.products.sortParams;
export const currentCategory = (state: any) => state.products.currentCategory;
export const isLoaded = (state: any) => state.products.isLoading;
export const getAll = (state: any) => state.products.products;
export const getAllSaved = (state: any) => state.products.allProducts;
export const productsReducer = productsSlice.reducer;