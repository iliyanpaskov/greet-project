import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "./ProductsServices";

export const getAllProducts = createAsyncThunk('products/AllProducts', async (pageNumber:number, thunkAPI) => {
    try {
        return getProducts(pageNumber);
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error });
    }
});