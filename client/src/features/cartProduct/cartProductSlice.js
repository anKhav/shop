import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    cart:[]
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
                state.cart[itemIndex].quantity += 1
            } else {
                const tempProduct = {...action.payload,quantity: 1}
                state.cart.push(tempProduct)
            }
        },
        setCardProductQuantity:(state, {payload}) => {
            state.cart = state.cart.map(product => product.name === payload.name && product.sizes === payload.size ? {
                ...product,
                quantity: payload.quantity
            } : product)
        },
        removeProduct:(state, action) => {
             state.cart = state.cart.filter(product => product.name + product.sizes !== action.payload)
        },
        clearCart: state => {
            state.cart = []
        }
    },
})
export const {setCartProduct, removeProduct, setCardProductQuantity, clearCart} = cartProductSlice.actions
export default cartProductSlice.reducer