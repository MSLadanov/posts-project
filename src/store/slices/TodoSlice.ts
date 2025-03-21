import { TTodoList } from "@/types/todoTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchTodos = createAsyncThunk('todos/fetchTodos',
    async () => {
        const response = await fetch('data.json');
        const { todoLists } = await response.json();
        return todoLists;
    }
);

interface TodoListsState {
    todoLists: TTodoList[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: TodoListsState = {
    todoLists: [],
    loading: 'idle',
};

const todoReducer = createSlice({
    name: 'todoLists',
    initialState,
    reducers: {
        
        getTodo: (state, action) => {
         
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.todoLists = action.payload; 
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.loading = 'failed';
            });
    },
});

export const { getTodo } = todoReducer.actions;
export default todoReducer.reducer;
