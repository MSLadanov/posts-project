import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: "idle",
};

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async (token: string) => {
    const response = await fetch("https://dummyjson.com/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Ошибка запроса!");
    }
    const user = response.json();
    return user;
  }
);
const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
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

export default userReducer.reducer;
