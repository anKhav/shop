import {createSlice} from "@reduxjs/toolkit";
import {ProductsData} from "../../data/data";

const initialState = ProductsData
console.log(initialState)


const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getProducts: (state) => {
            return state.name
        },
        // getProduct: (state) => {
        //     state.products.find(product => product.id === Number(id))
        // }
    }
})
export const {getProducts} = productsSlice.actions
export default productsSlice.reducer