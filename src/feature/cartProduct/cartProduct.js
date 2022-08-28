import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    cart:[],
    cartQuantity:0
}
const cartProduct = createSlice({
    name:'cartProduct',
    initialState,
    reducers:{
        setProduct:(state, action) => {
            const itemIndex = state.cart.findIndex((item) => {
                return (item.sizes === action.payload.sizes && item.name === action.payload.name)
            })
            if(itemIndex >= 0){
                state.cart[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cart.push(tempProduct)
            }
        },
        removeProduct:(state, action) => {
             state.cart = state.cart.filter(product => product.name + product.sizes !== action.payload)
        },
    }
})
export const {setProduct,removeProduct ,setNumbers, setCounter} = cartProduct.actions
export default cartProduct.reducer