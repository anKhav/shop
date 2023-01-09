

//https://jsonplaceholder.typicode.com/posts

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../services/AuthService";
import {SERVER_URL} from "../../utils/consts";
import axiosApi from "../../http/axios";


const initialState = {
    user:{id:null},
    isAuth:false,
    isLoading:false,
    response:null
}

export const registrationUser = createAsyncThunk(
    'user/registrationUser',
    async (user,{dispatch}) => {
        try {
            const response = await AuthService.registration(user)
            localStorage.setItem('token', response.data.accessToken)
            document.cookie = `email=${response.data.user.email}`
            return response.data.user
        } catch (e){
            dispatch(setResponse(e.response.data.message))
        }
    }
)
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user,{dispatch}) => {
       try {
           const response = await AuthService.login(user)
           localStorage.setItem('token', response.data.accessToken)
           console.log(response.data.user);
           dispatch(setAuth(true))
           dispatch(setResponse(true))
           dispatch(setUser(response.data.user))
       } catch (e){
           await dispatch(setResponse(e.response.data.message))
       }
    }
)

export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (id, {dispatch}) => {
        try {
            const res = await axios.delete(`${SERVER_URL}/api/user/${id}`,{params:{id}})
            console.log(res)
            dispatch(setAuth(false))
            dispatch(setUser({id:null}))
            dispatch(setResponse(null))
        } catch (e){
            throw e.message
        }
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
            dispatch(setResponse(null))
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
            const response = await axiosApi.get(`${SERVER_URL}/api/user/refresh`,{withCredentials:true})
            const {user} = response.data
            const {accessToken} = response.data
            localStorage.setItem('token', accessToken)
            dispatch(setAuth(true))
            dispatch(setUser(user))
        } catch (e){
            console.log(e)
        }
    }
)

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setAuth: (state,{payload}) => {
            state.isAuth = payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setLoading: (state,action) => {
            state.isLoading = action.payload
        },
        setResponse:(state, action) => {
            state.response = action.payload
        }
    },
    extraReducers:{
        [registrationUser.fulfilled] : (state, {payload}) => {
            state.isAuth = true
            state.user = payload
        },
        [registrationUser.pending] : () => console.log('pending'),
        // [registrationUser.rejected] : (state, {payload}) => {
        //     console.log(payload)
        // },
        // [deleteUser.fulfilled] : (state, action) => console.log('fulfilled'),
        // [deleteUser.pending] : () => console.log('pending'),
        // [deleteUser.rejected] : (state) => console.log("rejected"),
        // [loginUser.fulfilled] : (state, action) => state.isLoading = false,
        // [loginUser.pending] : (state) => state.isLoading = true,
        // [loginUser.rejected] : (state) => state.isLoading = false,
    }
})
export const {setAuth,setUser,setLoading, setResponse} = userSlice.actions

export default userSlice.reducer