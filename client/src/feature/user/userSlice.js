

//https://jsonplaceholder.typicode.com/posts

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user:{
        isLogin:false
    },

}
export const createUser = createAsyncThunk(
    'category/createCategory',
    async ({email,password},{dispatch}) => {
        await axios.post(`http://localhost:5000/api/user/registration`,{email,password})
        dispatch(addUser({email,password}))
    }
)
export const loginUser = createAsyncThunk(
    'category/createCategory',
    async (user,{dispatch}) => {
        await axios.post(`http://localhost:5000/api/user/login`,user)
        dispatch(authUser(user))
    }
)

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser: (state,action) => {
            state.user = action.payload
        },
        authUser: (state,action) => {
            state.user = action.payload
            console.log(action.payload)
        },
        exitUser:(state) => {
            state.user = {}
        },
    },
})
export const {addUser,authUser,exitUser} = userSlice.actions

export default userSlice.reducer