import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "./CategoriesServices";
import { ICategoriesData } from "../../Interfaces/interfaces";

export const getAllCategories = createAsyncThunk('categories/AllCategories', async (_categoriesData:ICategoriesData,thunkAPI)=>{
    try {
        return getCategories();
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error });
        
    }
});