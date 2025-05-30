import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/PostsSlices";
import userReducer from "./slices/UserSlices"

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch