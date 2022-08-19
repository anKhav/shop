import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    img:'',
    name:'',
    price:''
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        getProduct: (state) => {
            return state
        }
    }
})