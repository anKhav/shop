


import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from 'axios'

const initialState = {
    products:[],

}
export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (__,{ dispatch}) => {
        const res = await axios.get('http://localhost:5000/api/product')
        dispatch(setProducts(res.data.rows))
    }
)

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async ({name,price,img,sizes,categories},{ dispatch}) => {
        await axios.post(`http://localhost:5000/api/product`,{name,price,img,sizes,categories},{headers: {
                'content-type': 'multipart/form-data'
            }})
        dispatch(addProduct({name,price,sizes,categories}))
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
        }

    },
    extraReducers:{
        [getProducts.fulfilled] : () => console.log('fulfilled'),
        [getProducts.pending] : () => console.log('pending'),
        [getProducts.rejected] : () => console.log('rejected'),
        [createProduct.fulfilled] : () => console.log('fulfilled'),
        [createProduct.pending] : () => console.log('pending'),
        [createProduct.rejected] : () => console.log('rejected'),

    }
})
export const {setProducts,addProduct} = productsSlice.actions

export default productsSlice.reducer