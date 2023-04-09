import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: {
        products: null
    }
}

export default createSlice({
    name: 'product',
    initialState,
    reducers: {
        setData: (state, action)=> {
            state.data.products = action.payload;
        }
    }
})