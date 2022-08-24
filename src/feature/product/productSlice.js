import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id:null,
    img:'',
    name:'',
    price:null,
    best:false,
    new:false,
    rating:null,
    sizes:[],
    categories:[],
    tags:[],
    isCart:false
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
export const {getProduct} = productSlice.actions
export default productSlice.reducer