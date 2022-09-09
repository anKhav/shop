import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import productsSlice from "../feature/products/productsSlice";
import cartProduct from "../feature/cartProduct/cartProductSlice";
import productSlice from "../feature/product/productSlice";
import userSlice from "../feature/user/userSlice";
import sizeSlice from "../feature/size/sizeSlice";
import categorySLice from "../feature/category/categorySLice";

export const store = configureStore({
    reducer:{
        products: productsSlice,
        cartProduct:cartProduct,
        product:productSlice,
        user:userSlice,
        sizes:sizeSlice,
        categories:categorySLice
    },
    middleware: [
    ...getDefaultMiddleware({
        serializableCheck: false
    })]
})