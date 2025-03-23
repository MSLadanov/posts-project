import { TPostsListState } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const { postsList } = await response.json();
  return postsList;
});

export const fetchPostComments = createAsyncThunk(
  "posts/fetchComments",
  async (id: number) => {
    const response = await fetch(`'https://dummyjson.com/comments/post/${id}'`);
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const { comments } = await response.json();
    return comments;
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
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.postsList.loading = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.postsList.loading = "succeeded";
        state.postsList.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.postsList.loading = "failed";
      })
      .addCase(fetchPostComments.pending, (state) => {
        state.comments.loading = "pending";
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.comments.loading = "succeeded";
        state.comments.data = action.payload;
      })
      .addCase(fetchPostComments.rejected, (state) => {
        state.comments.loading = "failed";
      });
  },
});

export default postsReducer.reducer;
