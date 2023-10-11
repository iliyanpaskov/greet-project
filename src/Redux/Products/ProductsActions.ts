import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProductsData } from "../../Interfaces/interfaces";
import { getProducts } from "./ProductsServices";

export const getAllProducts = createAsyncThunk('products/AllProducts', async (_productsData: IProductsData, thunkAPI) => {
    try {
        return getProducts();
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error });
    }
});