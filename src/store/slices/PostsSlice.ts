import { TPost, TPostsListState } from "@/types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://dummyjson.com/posts");
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const { posts } = await response.json();
  return posts;
});

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id: number) => {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const post = await response.json();
    return post;
  }
);

export const fetchSearchedPosts = createAsyncThunk(
  "posts/fetchSearchedPosts",
  async (query: string) => {
    const response = await fetch(
      `https://dummyjson.com/posts/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const { posts } = await response.json();
    return posts;
  }
);

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
  post: {
    data: {},
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
  reducers: {
    sort(state, action: PayloadAction<string>) {
      switch (action.type) {
        case "Likes":
          return;
        case "Dislikes":
          return;

        case "Views":
          return;

        default:
          return state;
      }
    },
  },
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
      .addCase(fetchPostById.pending, (state, action) => {
        state.post.loading = "pending";
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.post.loading = "succeeded";
        state.post.data = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.post.loading = "failed";
      })
      .addCase(fetchSearchedPosts.pending, (state) => {
        state.postsList.loading = "pending";
      })
      .addCase(fetchSearchedPosts.fulfilled, (state, action) => {
        state.postsList.loading = "succeeded";
        state.postsList.data = action.payload;
      })
      .addCase(fetchSearchedPosts.rejected, (state) => {
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
