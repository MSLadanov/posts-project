import { TPost, TPostsListState } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchUser = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const { firstName, lastName, image } = await response.json();
  return { firstName, lastName, image };
};

const fetchPostsWithUsersData = async (posts: TPost[]) => {
  const postsWithUsersData = await Promise.all(
    posts.map(async (post: TPost) => ({
      ...post,
      rated: false,
      rate: null,
      user: await fetchUser(post.userId),
    }))
  );
  return postsWithUsersData;
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://dummyjson.com/posts");
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const { posts } = await response.json();
  const postsWithUsersData = fetchPostsWithUsersData(posts);
  return postsWithUsersData;
});

export const fetchPostsByTag = createAsyncThunk(
  "posts/fetchPostsByTag",
  async (tag: string) => {
    const response = await fetch(`https://dummyjson.com/posts/tag/${tag}`);
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const { posts } = await response.json();
    const postsWithUsersData = fetchPostsWithUsersData(posts);
    return postsWithUsersData;
  }
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id: number) => {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const post = await response.json();
    const user = await fetchUser(post.userId);
    const postsWithUserData = {
      ...post,
      user,
    };
    return postsWithUserData;
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
    const postsWithUsersData = fetchPostsWithUsersData(posts);
    return postsWithUsersData;
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
    data: null,
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
    ratePost(state, action) {
      const { post, reaction } = action.payload;
      const { id, reactions } = post;
      const postIndex = state.postsList.data.findIndex((p) => p.id === id);
      if (postIndex === -1) return;
      if (!reaction) {
        state.postsList.data[postIndex] = post;
        return;
      }
      const updatedPost = { ...state.postsList.data[postIndex] };
      switch (reaction) {
        case "like":
          updatedPost.reactions = {
            ...reactions,
            likes: reactions.likes + 1,
          };
          updatedPost.rate = "liked";
          break;
        case "dislike":
          updatedPost.reactions = {
            ...reactions,
            dislikes: reactions.dislikes + 1,
          };
          updatedPost.rate = "disliked";
          break;
        default:
          return;
      }
      updatedPost.rated = !updatedPost.rated;
      state.postsList.data[postIndex] = updatedPost;
    },
    rateComment(state, action) {
      console.log(action);
    },
    sort(state, action) {
      const posts = state.postsList.data || [];
      switch (action.payload) {
        case "Likes":
          posts.sort(
            (a: TPost, b: TPost) => a.reactions.likes - b.reactions.likes
          );
          state.postsList.data = posts;
          break;
        case "Dislikes":
          posts.sort(
            (a: TPost, b: TPost) => a.reactions.dislikes - b.reactions.dislikes
          );
          state.postsList.data = posts;
          break;
        case "Views":
          posts.sort((a: TPost, b: TPost) => a.views - b.views);
          state.postsList.data = posts;
          break;
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
      })
      .addCase(fetchPostsByTag.pending, (state, action) => {
        state.post.loading = "pending";
      })
      .addCase(fetchPostsByTag.fulfilled, (state, action) => {
        state.post.loading = "succeeded";
        state.postsList.data = action.payload;
      })
      .addCase(fetchPostsByTag.rejected, (state, action) => {
        state.post.loading = "failed";
      });
  },
});

export const { sort, ratePost, rateComment } = postsReducer.actions;

export default postsReducer.reducer;
