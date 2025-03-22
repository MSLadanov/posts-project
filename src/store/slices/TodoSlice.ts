import { TTodoList, TTodoListsState } from "@/types/todoTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodoLists", async () => {
  const response = await fetch("data.json");
  const { todoLists } = await response.json();
  return todoLists;
});

export const fetchTodoListById = createAsyncThunk(
  "todos/fetchTodoListById",
  async (id: number) => {
    const response = await fetch("data.json");
    const { todoLists } = await response.json();
    const todoList = todoLists.find((tl: TTodoList) => tl.id === id);
    return todoList;
  }
);

const initialState: TTodoListsState = {
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
