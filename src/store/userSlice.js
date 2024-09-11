import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestApi from "../api/RestApi";

export const getAllPosts=createAsyncThunk(
  "user/allPost",
  async (_,{getState,rejectWithValue})=>{
    try {
      const { authInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
      const response = await RestApi.get(
        "/api/v1/post/all",
        config
      );
      const {data}=response;
      return data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
       
    }
  }
)




const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    userposts: null,
    error: null,
    success: null,
  },
  reducers: {
    clearError: (state) => {
      state.success = null;
      state.error = null;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getAllPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userposts = payload?.post;
        state.success = true;
      })
      .addCase(getAllPosts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

// Export actions
export const { clearError, logout } = userSlice.actions;
export default userSlice.reducer;
