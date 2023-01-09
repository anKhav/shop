import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from 'axios'
import {SERVER_URL} from "../../utils/consts";

const initialState = {
    products:[],

}
export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const res = await axios.get(`${SERVER_URL}/api/product`)
        return res.data.rows
    }
)

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async ({name,price,img,sizes,categories}) => {
        const res = await axios.post(`${SERVER_URL}/api/product`,{name,price,img,sizes,categories},{headers: {
                'content-type': 'multipart/form-data'
            }})
        return res.data
    }
)
export const deleteProduct = createAsyncThunk(
    'category/deleteCategory',
    async (id) => {
        console.log(id)
        const res = await axios.delete(`${SERVER_URL}/api/product`,{data:id})
        return res.data
    }
)

const productsSlice = createSlice({
    name:'products',
    initialState,
    extraReducers:{
        [getProducts.fulfilled] : (state,{payload}) => void(state.products = payload),
        [getProducts.pending] : () => console.log('pending'),
        [getProducts.rejected] : () => console.log('rejected'),

        [createProduct.fulfilled] : (state, {payload}) => void(state.products =  state.products.push(payload)),
        [createProduct.pending] : () => console.log('pending'),
        [createProduct.rejected] : () => console.log('rejected'),

        [deleteProduct.fulfilled] : (state, {payload}) => state.products = state.products.filter(product => product.id !== payload),
        [deleteProduct.pending] : () => console.log('pending'),
        [deleteProduct.rejected] : () => console.log('rejected'),

    }
})

export default productsSlice.reducer