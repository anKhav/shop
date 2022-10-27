

//https://jsonplaceholder.typicode.com/posts

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../services/AuthService";


const initialState = {
    user:null,
    isAuth:false,
    isLoading:false,
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user,{dispatch}) => {
       const response = await AuthService.login(user)
        localStorage.setItem('token', response.data.accessToken)
        localStorage.setItem('user', JSON.stringify(user))
        document.cookie = `email=${response.data.user.email}`
        console.log(localStorage)
        dispatch(setAuth(true))
        dispatch(setUser(user))
    }
)

export const registrationUser = createAsyncThunk(
    'user/registrationUser',
    async (user,{dispatch}) => {
        const response = await AuthService.registration(user)
        localStorage.setItem('token', response.data.accessToken)
        document.cookie = `email=${response.data.user.email}`
        console.log(response)
        dispatch(setAuth(true))
        dispatch(setUser(user))
    }
)

export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async (refreshToken,{dispatch}) => {
        try {
            setLoading(true)
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            dispatch(setAuth(false))
            dispatch(setUser(null))
        } catch (e){
            console.log(e)
        } finally {
            console.log('finnaly')
        }
    }
)



export const checkAuth = createAsyncThunk(
    'user/checkAuth',
    async (user,{dispatch}) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/user/refresh`,{withCredentials:true})
            const {user} = response.data

            // localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            dispatch(setAuth(true))
            dispatch(setUser(user))
            console.log(user)
        } catch (e){
            console.log(e)
        }
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
        setLoading: (state,action) => {
            state.isLoading = action.payload
        }
    },
})
export const {setAuth,setUser,setLoading} = userSlice.actions

export default userSlice.reducer