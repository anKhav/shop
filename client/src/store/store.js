import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "../feature/products/productsSlice";
import cartProduct from "../feature/cartProduct/cartProductSlice";

export const store = configureStore({
    reducer:{
        products: productsSlice,
        cartProduct:cartProduct
    }
})