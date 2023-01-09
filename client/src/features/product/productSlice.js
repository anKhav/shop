import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {SERVER_URL} from "../../utils/consts";

const initialState = {
    product:null
}

export const getOneProduct = createAsyncThunk(
    'product/getOneProduct',
    async (id,{rejectWithValue, dispatch}) => {
        const res = await axios.get(`${SERVER_URL}/api/product/${id}`)
        return res.data
    }
)

const productSlice = createSlice({
    name:'product',
    initialState,
    extraReducers:{
        [getOneProduct.fulfilled] : (state, {payload}) => void(state.product = payload),
        [getOneProduct.pending] : () => console.log('pending'),
        [getOneProduct.rejected] : () => console.log('rejected')
    }
})
export const {setProduct} = productSlice.actions

export default productSlice.reducer
