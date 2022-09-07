import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    cart:[],
    cartQuantity:0
}
const cartProductSlice = createSlice({
    name:'cartProduct',
    initialState,
    reducers:{
        setCartProduct:(state, action) => {
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
export const {setCartProduct,removeProduct ,setNumbers, setCounter} = cartProductSlice.actions
export default cartProductSlice.reducer