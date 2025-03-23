import { TTodoList, TTodoListsState } from "@/types/todoTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodoLists", async () => {
  const response = await fetch("data.json");
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const { todoLists } = await response.json();
  return todoLists;
});

export const fetchTodoListById = createAsyncThunk(
  "todos/fetchTodoListById",
  async (id: number) => {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const { todoLists } = await response.json();
    const todoList = todoLists.find((tl: TTodoList) => tl.id === id);
    if (!todoList) {
      throw new Error(`Список дел с id ${id} не найден!`);
    }
    return todoList;
  }
);

const initialState: TTodoListsState = {
  todoLists: {
    data: [],
    loading: "idle",
  },
  currentTodoList: {
    data: [],
    loading: "idle",
  },
};

const todoReducer = createSlice({
  name: "todoLists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.todoLists.loading = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todoLists.loading = "succeeded";
        state.todoLists.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.todoLists.loading = "failed";
      })
      .addCase(fetchTodoListById.pending, (state) => {
        state.currentTodoList.loading = "pending";
      })
      .addCase(fetchTodoListById.fulfilled, (state, action) => {
        state.currentTodoList.loading = "succeeded";
        state.currentTodoList.data = action.payload;
      })
      .addCase(fetchTodoListById.rejected, (state) => {
        state.currentTodoList.loading = "failed";
      });
  },
});

export default todoReducer.reducer;
