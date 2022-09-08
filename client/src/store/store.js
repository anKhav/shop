import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "../feature/products/productsSlice";
import cartProduct from "../feature/cartProduct/cartProductSlice";
import productSlice from "../feature/product/productSlice";
import userSlice from "../feature/user/userSlice";

export const store = configureStore({
    reducer:{
        products: productsSlice,
        cartProduct:cartProduct,
        product:productSlice,
        user:userSlice,
    }
})