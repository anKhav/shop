import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    categories:[]
}

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (__,{ dispatch}) => {
        const res = await axios.get(`http://localhost:5000/api/category`)
        dispatch(setCategories(res.data))
    }
)

const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        setCategories: (state,action) => {
            state.categories = action.payload
        }
    },
    extraReducers:{
        [getCategories.fulfilled] : () => console.log('fulfilled'),
        [getCategories.pending] : () => console.log('pending'),
        [getCategories.rejected] : () => console.log('rejected')
    }
})
export const {setCategories} = categorySlice.actions

export default categorySlice.reducer