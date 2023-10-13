import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "./CategoriesServices";


export const getAllCategories = createAsyncThunk('categories/AllCategories', async () => {
    try {
        return getCategories();
    } catch (error) { }
});