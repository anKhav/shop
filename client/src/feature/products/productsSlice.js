

//https://jsonplaceholder.typicode.com/posts

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    products:[],

}

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (__,{rejectWithValue, dispatch}) => {
        const res = await axios.get('http://localhost:5000/api/product')
        dispatch(setProducts(res.data.rows))
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
        }
    },
    extraReducers:{
        [getProducts.fulfilled] : () => console.log('fulfilled'),
        [getProducts.pending] : () => console.log('pending'),
        [getProducts.rejected] : () => console.log('rejected'),
    }
})
export const {setProducts} = productsSlice.actions

export default productsSlice.reducer