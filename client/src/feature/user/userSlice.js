

//https://jsonplaceholder.typicode.com/posts

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user:{
        isAuth:true
    },

}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setIsAuth: (state) => {
            state.user.isAuth = !state.user.isAuth
        }
    },
})
export const {setIsAuth} = userSlice.actions

export default userSlice.reducer