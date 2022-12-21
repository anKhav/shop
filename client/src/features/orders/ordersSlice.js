import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import OrderService from "../../services/OrderService";

const initialState = {
    order:[],
    orders:[],
    allOrders:[]
}


export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (order,{dispatch}) => {
        const response = await OrderService.createOrder(order)
        dispatch(addOrder(order))
    }
)

export const getAllUserOrders = createAsyncThunk(
    'orders/getAllOrders',
    async (__,{dispatch}) => {
        const response = await OrderService.getAllUserOrders()
        dispatch(setOrders(response.data))
    }
)
export const getAllOrders = createAsyncThunk(
    'orders/getAllOrders',
    async (__,{dispatch}) => {
        const response = await OrderService.getAllOrders()
        dispatch(setAllOrders(response.data))
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
        setAllOrders: (state, action) => {
            state.allOrders = action.payload
        },
        clearOrders: (state, action) => {
            state.orders = []
        },

    },
})
export const {addOrder,setOrders,clearOrders, setAllOrders} = ordersSlice.actions

export default ordersSlice.reducer