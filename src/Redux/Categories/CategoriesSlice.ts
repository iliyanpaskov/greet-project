import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "./CategoriesActions";
import { ICategoriesData, ICategory } from "../../Interfaces/interfaces";


interface ICategoriesState extends ICategoriesData {
    isLoading: boolean,
    isError: boolean,
}

const initialState: ICategoriesState = {
    isLoading: false,
    isError: false,
    data: [],
    headerCategory: [{
        id: 15,
        name: "Всички"
    }]
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        setCategory: (state: ICategoriesState, action) => {
            state.headerCategory = state.data.filter((x: ICategory) => x.id === action.payload);
        },
    },
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

export const { setCategory } = categoriesSlice.actions;
export const headerCategory = (state: any) => state.categories.headerCategory;
export const allCategories = (state: any) => state.categories.data;
export const categoriesReducer = categoriesSlice.reducer;