


import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from 'axios'
import {SERVER_URL} from "../../utils/consts";

const initialState = {
    products:[],

}
export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (__,{ dispatch}) => {
        const res = await axios.get(`${SERVER_URL}/api/product`)
        dispatch(setProducts(res.data.rows))
    }
)

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async ({name,price,img,sizes,categories},{ dispatch}) => {
        await axios.post(`${SERVER_URL}/api/product`,{name,price,img,sizes,categories},{headers: {
                'content-type': 'multipart/form-data'
            }})
        dispatch(addProduct({name,price,sizes,categories}))
    }
)
export const deleteProduct = createAsyncThunk(
    'category/deleteCategory',
    async (id,{dispatch}) => {
        console.log(id)
        await axios.delete(`${SERVER_URL}/api/product`,{data:id})
        dispatch(delProduct())
    }
)

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts: (state,action) => {
            state.products = action.payload
        },
        setProduct: (state,action) => {
            state.product = state.products.find(product => product.id === action.payload.id)
        },
        addProduct: (state, action,obj) => {
            console.log(obj)
            state.products =  state.products.push(action.payload)
        },
        delProduct: (state,action) => {
            console.log(action.payload)
            state.products = state.products.filter(product => product.id !== action.payload)
        },

    },
    extraReducers:{
        [getProducts.fulfilled] : () => console.log('fulfilled'),
        [getProducts.pending] : () => console.log('pending'),
        [getProducts.rejected] : () => console.log('rejected'),
        [createProduct.fulfilled] : () => console.log('fulfilled'),
        [createProduct.pending] : () => console.log('pending'),
        [createProduct.rejected] : () => console.log('rejected'),
        [deleteProduct.fulfilled] : () => console.log('fulfilled'),
        [deleteProduct.pending] : () => console.log('pending'),
        [deleteProduct.rejected] : () => console.log('rejected'),

    }
})
export const {setProducts,addProduct,delProduct} = productsSlice.actions

export default productsSlice.reducer