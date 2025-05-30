import { TPost, TPostsListState } from "@/types/types";
import { fetchPostById, fetchPostComments, fetchPosts, fetchPostsByTag, fetchSearchedPosts, fetchTags } from "../posts.api";
import { createSlice } from "@reduxjs/toolkit";

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
  tag: [],
  postsTags: {
    data: null,
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
        state.postsList.data[postIndex] = { ...post, rated: false, rate: null };
        return;
      }
      const updatedPost = { ...state.postsList.data[postIndex] };
      switch (reaction) {
        case "liked":
          updatedPost.reactions = {
            ...reactions,
            likes: reactions.likes + 1,
          };
          updatedPost.rate = "liked";
          break;
        case "disliked":
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
    ratePagedPost(state, action) {
      const { post, reaction } = action.payload;
      const { reactions } = post;
      if (!reaction) {
        state.post.data = { ...post, rated: false, rate: null };
        return;
      }
      const updatedPost = { ...state.post.data };
      switch (reaction) {
        case "liked":
          updatedPost.reactions = {
            ...reactions,
            likes: reactions.likes + 1,
          };
          updatedPost.rate = "liked";
          break;
        case "disliked":
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
      state.post.data = updatedPost as TPost;
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
    addPost(state, action) {
      const prevState = state.postsList.data;
      state.postsList.data = [action.payload, ...prevState];
    },
    addComment(state, action) {
      const prevState = state.comments.data;
      state.comments.data = [action.payload, ...prevState];
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
      .addCase(fetchTags.pending, (state) => {
        state.postsTags.loading = "pending";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.postsTags.loading = "succeeded";
        state.postsTags.data = action.payload;
      })
      .addCase(fetchTags.rejected, (state) => {
        state.postsTags.loading = "failed";
      })
      .addCase(fetchPostComments.pending, (state) => {
        state.comments.loading = "pending";
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.post.loading = "succeeded";
        state.comments.data = action.payload;
      })
      .addCase(fetchPostComments.rejected, (state) => {
        state.comments.loading = "failed";
      })
      .addCase(fetchPostById.pending, (state) => {
        state.post.loading = "pending";
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.post.loading = "succeeded";
        state.post.data = action.payload;
      })
      .addCase(fetchPostById.rejected, (state) => {
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
      .addCase(fetchPostsByTag.pending, (state) => {
        state.postsList.loading = "pending";
        state.tag = [];
      })
      .addCase(fetchPostsByTag.fulfilled, (state, action) => {
        state.postsList.loading = "succeeded";
        state.postsList.data = action.payload.postsWithUsersData;
        state.tag = [action.payload.tag];
      })
      .addCase(fetchPostsByTag.rejected, (state) => {
        state.postsList.loading = "failed";
        state.tag = [];
      });
  },
});

export const { sort, ratePost, addPost, addComment, ratePagedPost } = postsReducer.actions;

export default postsReducer.reducer;
