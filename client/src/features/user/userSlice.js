

//https://jsonplaceholder.typicode.com/posts

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../services/AuthService";
import {SERVER_URL} from "../../utils/consts";


const initialState = {
    user:{id:null},
    isAuth:false,
    isLoading:false,
    response:null
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user,{dispatch}) => {
       try {
           const response = await AuthService.login(user)
           localStorage.setItem('token', response.data.accessToken)
           localStorage.setItem('user', JSON.stringify(user))
           document.cookie = `email=${response.data.user.email}`
           dispatch(setAuth(true))
           dispatch(setResponse(true))
           dispatch(setUser(user))
       } catch (e){
           await dispatch(setResponse(e.response.data.message))
       }
    }
)

export const registrationUser = createAsyncThunk(
    'user/registrationUser',
    async (user,{dispatch}) => {
        try {
            const response = await AuthService.registration(user)
            localStorage.setItem('token', response.data.accessToken)
            document.cookie = `email=${response.data.user.email}`
            dispatch(setAuth(true))
            dispatch(setUser(user))
        } catch (e){
            dispatch(setResponse(e.response.data.message))
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
            const response = await axios.get(`${SERVER_URL}/api/user/refresh`,{withCredentials:true})
            const {user} = response.data

            // localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
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
        [registrationUser.fulfilled] : (state, action) => console.log(action.payload),
        [registrationUser.pending] : () => console.log('pending'),
        [registrationUser.rejected] : (state) => state.response = null,
        [deleteUser.fulfilled] : (state, action) => console.log('fulfilled'),
        [deleteUser.pending] : () => console.log('pending'),
        [deleteUser.rejected] : (state) => console.log("rejected"),
        // [loginUser.fulfilled] : (state, action) => state.isLoading = false,
        // [loginUser.pending] : (state) => state.isLoading = true,
        // [loginUser.rejected] : (state) => state.isLoading = false,
    }
})
export const {setAuth,setUser,setLoading, setResponse} = userSlice.actions

export default userSlice.reducer