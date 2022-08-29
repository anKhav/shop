import {createSlice} from "@reduxjs/toolkit";
import {ProductsData} from "../../data/data";

const initialState = ProductsData


const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getProducts: (state) => {
            return state.name
        },
    }
})
export const {getProducts} = productsSlice.actions
export default productsSlice.reducer