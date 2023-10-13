import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./Products/ProductsSlice";
import { categoriesReducer } from "./Categories/CategoriesSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
