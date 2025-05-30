import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_BASE_URL = "https://dummyjson.com";
const API_ENDPOINTS = {
  CURRENT_USER: `${API_BASE_URL}/user/me`,
};

interface UserState {
  data: Record<string, unknown>;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: UserState = {
  data: {},
  loading: "idle",
};

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async (token: string) => {
    const response = await fetch(API_ENDPOINTS.CURRENT_USER, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка запроса!");
    }

    const user = await response.json(); 
    return user;
  }
);

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut(state) {
      state.data = {};
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { signOut } = userReducer.actions;

export default userReducer.reducer;
