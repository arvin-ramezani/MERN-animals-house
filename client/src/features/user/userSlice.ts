import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist/es/constants";
import { loginUser, registerUser } from "../../API/publicApi";
import { RootState } from "../../app/store";
import {
  ILoginUser,
  IRegisterUser,
  IUserState,
} from "../../interfaces/interfaces";

const initialState: IUserState = {
  userInfo: null,
  status: "idle",
};

// Register User
export const registerUserAsync = createAsyncThunk(
  "users/registerUserAsync",

  async (userInfo: IRegisterUser) => {
    const response = await registerUser(userInfo);

    return response.data;
  }
);

// Login User
export const loginUserAsync = createAsyncThunk(
  "users/loginUserAsync",

  async (userInfo: ILoginUser) => {
    const response = await loginUser(userInfo);

    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(registerUserAsync.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.userInfo = payload;
        localStorage.setItem(
          "accessToken",
          JSON.stringify(payload.accessToken)
        );
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(payload.refreshToken)
        );
      });

    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(loginUserAsync.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.userInfo = payload;
        localStorage.setItem(
          "accessToken",
          JSON.stringify(payload.accessToken)
        );
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(payload.refreshToken)
        );
      });

    builder.addCase(PURGE, (state) => {
      state.userInfo = null;
    });
  },
});

// User Selector
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
