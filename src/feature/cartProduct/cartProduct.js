import {createSlice} from "@reduxjs/toolkit";
const initialState = []

const cartProduct = createSlice({
    name:'cartProduct',
    initialState,
    reducers:{
        setProduct:(state, action) => {
            state.push({...action.payload})
        },
        removeProduct:(state, action) => {
             return  state.filter(({name,sizes}) => name + sizes !== action.payload)
        }
    }
})
export const {setProduct,removeProduct} = cartProduct.actions
export default cartProduct.reducer