import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    sizes:[]
}

export const getSizes = createAsyncThunk(
    'sizes/getSizes',
    async (__,{ dispatch}) => {
        const res = await axios.get(`http://localhost:5000/api/size/`)
        dispatch(setSize(res.data))
    }
)

const sizeSlice = createSlice({
    name:'size',
    initialState,
    reducers:{
        setSize: (state,action) => {
            state.sizes = action.payload
        }
    },
    extraReducers:{
        [getSizes.fulfilled] : () => console.log('fulfilled'),
        [getSizes.pending] : () => console.log('pending'),
        [getSizes.rejected] : () => console.log('rejected')
    }
})
export const {setSize} = sizeSlice.actions

export default sizeSlice.reducer