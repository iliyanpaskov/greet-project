import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "./CategoriesActions";
import { ICategoriesData } from "../../Interfaces/interfaces";


interface ICategoriesState extends ICategoriesData {
    isLoading: boolean,
    isError: boolean,
}

const initialState: ICategoriesState = {
    isLoading: false,
    isError: false,
    data: [],
    
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllCategories.fulfilled, (state: ICategoriesState, action) => {
                state.isError = false;
                state.isLoading = false;
                // @ts-expect-error
                state.data = action.payload;
            })
            .addCase(getAllCategories.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(getAllCategories.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
                state.data = [];
            })
    }
});

export const categoriesReducer = categoriesSlice.reducer;
