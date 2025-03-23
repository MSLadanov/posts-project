import { TPostsList, TPostsListState } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodoLists", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const { todoLists } = await response.json();
  return todoLists;
});

export const fetchTodoListById = createAsyncThunk(
  "todos/fetchTodoListById",
  async (id: number) => {
  
  }
);

const initialState: TPostsListState = {
  postsList: {
    data: [],
    loading: "idle",
  },
  comments: {
    data: [],
    loading: "idle",
  },
};

const postsReducer = createSlice({
  name: "todoLists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.postsList.loading = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.postsList.loading = "succeeded";
        state.postsList.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.postsList.loading = "failed";
      })
      .addCase(fetchTodoListById.pending, (state) => {
        state.comments.loading = "pending";
      })
      .addCase(fetchTodoListById.fulfilled, (state, action) => {
        state.comments.loading = "succeeded";
        state.comments.data = action.payload;
      })
      .addCase(fetchTodoListById.rejected, (state) => {
        state.comments.loading = "failed";
      });
  },
});

export default postsReducer.reducer;
