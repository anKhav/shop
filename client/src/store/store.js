import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import cartProduct from "../features/cartProduct/cartProductSlice";
import productSlice from "../features/product/productSlice";
import userSlice from "../features/user/userSlice";
import sizeSlice from "../features/size/sizeSlice";
import categorySLice from "../features/category/categorySLice";
import ordersSlice from "../features/orders/ordersSlice";

export const store = configureStore({
    reducer:{
        products: productsSlice,
        cartProduct:cartProduct,
        product:productSlice,
        user:userSlice,
        sizes:sizeSlice,
        categories:categorySLice,
        orders:ordersSlice
    },
    middleware: [
    ...getDefaultMiddleware({
        serializableCheck: false
    })]
})