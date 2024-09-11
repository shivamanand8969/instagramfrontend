import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestApi from "../api/RestApi";
export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await RestApi.post("/api/v1/user/register", formData, config);
      const { data } = response;
      return data;
    } catch (error) {
      if (error.response && error.response.data) {  
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await RestApi.post("/api/v1/user/login", formData, config);
      console.log("data",data);
      if(data){
        localStorage.setItem("authInfo", JSON.stringify(data?.user));
      }
      return data?.user;
    } catch (error) {
     console.log("Error",error);
     if(error.response && error.response.data.message){
      return rejectWithValue(error.response.data.message);
     }    
    return rejectWithValue(error.message);
  }
  }
);

export const uploadPost=createAsyncThunk(
  "post/upload",
  async ({formData},{getState,rejectWithValue})=>{
    try {
      const { authInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };

      const  response  = await RestApi.post(
        "/api/v1/post/addpost",
        formData,
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

export const updateUserDetails = createAsyncThunk(
  "auth/updateUserDetails",
  async ({formdata}, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };

      const  response  = await RestApi.post(
        "/api/v1/user/profile/edit",
        formdata,
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
);

export const deleteProfile = createAsyncThunk(
  "delete/userprofile",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };

      const  response  = await RestApi.delete(
        "/api/v1/user/profilepicture/delete",
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
);


export const myDetails = createAsyncThunk(
  "auth/myDetails",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };

      // Make request to the backend
      const { data } = await RestApi.get(`/api/v1/user/${authInfo?._id}/profile`, config);
      return data?.user
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

// to Update the password
export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async ({ phone, newPassword }, { getState, rejectWithValue }) => {
    try {
      // Make request to the backend
      const { data } = await RestApi.patch(
        `/auth/user/updatePassword/${phone}`,
        { newPassword: newPassword }
      );

      return data?.message;
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    authInfo: localStorage.getItem("authInfo")
      ? JSON.parse(localStorage.getItem("authInfo"))
      : null,
    myAllDetails: null,
    error: null,
    success: null,
  },
  reducers: {
    clearError: (state) => {
      state.success = null;
      state.error = null;
    },
    logout: (state) => {
      localStorage.removeItem("authInfo");
      state.loading = false;
      state.authInfo = null;
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.authInfo = payload;
        state.success = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(myDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(myDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.myAllDetails = payload;
        state.success = true;
      })
      .addCase(myDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload?.message;
      })
      .addCase(userRegister.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateUserDetails.pending,(state)=>{
           state.loading=true;
           state.error=null;
           state.success=false;
      })
      .addCase(updateUserDetails.fulfilled,(state,{payload})=>{
           state.loading=false;
           state.success=payload.message;
      })
      .addCase(updateUserDetails.rejected,(state,{payload})=>{
        state.loading=false;
        state.error=payload.message;
      })
      

      // update password
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updatePassword.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload?.message;
      })
      .addCase(updatePassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// Export actions
export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;
