import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "./ProductsServices";
import { ISortParams } from "../../Interfaces/interfaces";

export const getAllProducts = createAsyncThunk('products/AllProducts', async (params: ISortParams, thunkAPI) => {
    try {
        return getProducts(params);
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error });
    }
});