import { TodoListsState } from "@/types/todoTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("data.json");
  const { todoLists } = await response.json();
  return todoLists;
});

const initialState: TodoListsState = {
  todoLists: [],
  loading: "idle",
};

const todoReducer = createSlice({
  name: "todoLists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.todoLists = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default todoReducer.reducer;
