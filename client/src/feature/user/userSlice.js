

//https://jsonplaceholder.typicode.com/posts

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../services/AuthService";

const initialState = {
    user:{},
    isAuth:false,
    setLoading:false
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user,{dispatch}) => {
       const response = await AuthService.login(user)
        localStorage.setItem('token', response.data.accessToken)
        localStorage.setItem('user', user)
        document.cookie = `email=${response.data.user.email}`
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
            setLoadingTrue(true)
            console.log(true)
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            console.log(response)
            dispatch(setAuth(false))
            dispatch(setUser({}))
        } catch (e){
            console.log(e)
        } finally {
            setLoadingFalse(false)
        }
    }
)



export const checkAuth = createAsyncThunk(
    'category/createCategory',
    async (user,{dispatch}) => {
        try {
            setLoadingTrue(true)
            const response = await axios.get(`http://localhost:5000/api/user/refresh`)

            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            dispatch(setAuth(true))
            dispatch(setUser(user))
        } catch (e){
            console.log(e)
        } finally {
            setLoadingFalse(false)
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
        setLoadingTrue: state => {
            state.setLoading = true
        },
        setLoadingFalse: state => {
            state.setLoading = false
        },
    },
})
export const {setAuth,setUser,setLoadingTrue, setLoadingFalse} = userSlice.actions

export default userSlice.reducer