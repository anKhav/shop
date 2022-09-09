import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    categories:[]
}

export const getCategories = createAsyncThunk(
    'category/getCategories',
    async (__,{ dispatch}) => {
        const res = await axios.get(`http://localhost:5000/api/category`)
        dispatch(setCategories(res.data))
    }
)
export const createCategory = createAsyncThunk(
    'category/createCategory',
    async ({name},{dispatch}) => {
        await axios.post(`http://localhost:5000/api/category`,{name})
        dispatch(addCategories({name}))
    }
)
export const deleteCategory = createAsyncThunk(
    'category/deleteCategory',
    async (obj,{dispatch}) => {
        await axios.delete(`http://localhost:5000/api/category`,{data:obj})
        dispatch(delCategory({obj}))
    }
)


const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        setCategories: (state,action) => {
            state.categories = action.payload
        },
        addCategories: (state,action) => {
            state.categories.push(action.payload)
        },
        delCategory: (state,action) => {
            state.categories = state.categories.filter(cat => cat.name !== action.payload.name)
        },
    },
    extraReducers:{
        [getCategories.fulfilled] : () => console.log('fulfilled'),
        [getCategories.pending] : () => console.log('pending'),
        [getCategories.rejected] : () => console.log('rejected'),
        [createCategory.fulfilled] : () => console.log('fulfilled'),
        [createCategory.pending] : () => console.log('pending'),
        [createCategory.rejected] : () => console.log('rejected'),
        [deleteCategory.fulfilled] : () => console.log('fulfilled'),
        [deleteCategory.pending] : () => console.log('pending'),
        [deleteCategory.rejected] : () => console.log('rejected')
    }
})
export const {setCategories, addCategories, delCategory} = categorySlice.actions

export default categorySlice.reducer