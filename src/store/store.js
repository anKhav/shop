import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "../feature/products/productsSlice";

export const store = configureStore({
    reducer:{
        products: productsSlice,
    }
})