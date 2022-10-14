import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import OrderService from "../../services/OrderService";

const initialState = {
    order:[],
    orders:[]
}


export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (order,{dispatch}) => {
        const response = await OrderService.createOrder(order)
        dispatch(addOrder(order))
    }
)

export const getAllOrders = createAsyncThunk(
    'orders/getAllOrders',
    async (__,{dispatch}) => {
        const response = await OrderService.getAllOrders()
        dispatch(setOrders(response.data))
    }
)


const ordersSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        addOrder: (state, action) => {
            state.order.push(action.payload)
        },
        setOrders: (state, action) => {
            state.orders = action.payload
        },

    },
})
export const {addOrder,setOrders} = ordersSlice.actions

export default ordersSlice.reducer