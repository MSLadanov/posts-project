import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        getTodo: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default todoReducer.reducer