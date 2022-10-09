

//https://jsonplaceholder.typicode.com/posts

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../services/AuthService";

const initialState = {
    user:{},
    isAuth:false
}
// export const createUser = createAsyncThunk(
//     'user/createUser',
//     async ({email,password},{dispatch}) => {
//          const res = await axios.post(`http://localhost:5000/api/user/registration`,{email,password})
//         console.log(res)
//         dispatch(addUser({email,password}))
//     }
// )
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user,{dispatch}) => {
       const response = await AuthService.login(user)
        localStorage.setItem('token', response.data.accessToken)
        console.log(response)
        dispatch(setAuth(true))
        dispatch(setUser(user))
    }
)

export const registrationUser = createAsyncThunk(
    'user/registrationUser',
    async (user,{dispatch}) => {
        const response = await AuthService.registration(user)
        localStorage.setItem('token', response.data.accessToken)
        console.log(response)
        dispatch(setAuth(true))
        dispatch(setUser(user))
    }
)

export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async (user,{dispatch}) => {
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        console.log(response)
        dispatch(setAuth(false))
        dispatch(setUser({}))
    }
)



export const checkAuth = createAsyncThunk(
    'category/createCategory',
    async (user,{dispatch}) => {
        const response = await axios.get(`http://localhost:5000/api/user/refresh`)
        console.log(response)

        localStorage.setItem('token', response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUser(user))
    }
)

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setAuth: (state) => {
            state.isAuth = true
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
})
export const {setAuth,setUser} = userSlice.actions

export default userSlice.reducer