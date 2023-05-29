import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../../types/types";
import { confirmEmail, createUser, loggedInUser } from "./auth.service";
import jwt_decode from "jwt-decode";

interface DecodedToken {
  username: string;
  email: string;
  id: string;
  isEmailConfirmed: boolean;
  isCookiesConfirmed: boolean;
}

const initialState: Auth = {
  access_token: localStorage.getItem("access_token") || "",
  id: "",
  username: "",
  email: "",
  isEmailConfirmed: false,
  isCookiesConfirmed: false,
  registerStatus: "idle",
  registerError: [],
  loginStatus: "idle",
  loginError: [],
  userLoaded: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser: (state) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        const decodedToken = jwt_decode<DecodedToken>(token);
        state.access_token = token;
        state.id = decodedToken.id;
        state.username = decodedToken.username;
        state.email = decodedToken.email;
        state.isEmailConfirmed = decodedToken.isEmailConfirmed;
        state.isCookiesConfirmed = decodedToken.isCookiesConfirmed;
        state.userLoaded = true;
      }
    },
    logout: (state) => {
      localStorage.removeItem("access_token");
      state.access_token = "";
      state.id = "";
      state.username = "";
      state.email = "";
      state.isEmailConfirmed = false;
      state.isCookiesConfirmed = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.registerStatus = "loading";
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.registerStatus = "succeeded";
      state.access_token = action.payload.access_token;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isEmailConfirmed = action.payload.isEmailConfirmed;
      state.isCookiesConfirmed = action.payload.isCookiesConfirmed;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.registerStatus = "failed";
      state.registerError = action.payload || [];
    });
    builder.addCase(loggedInUser.pending, (state) => {
      state.loginStatus = "loading";
    });
    builder.addCase(loggedInUser.fulfilled, (state, action) => {
      state.loginStatus = "succeeded";
      state.access_token = action.payload.access_token;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
    });
    builder.addCase(loggedInUser.rejected, (state, action) => {
      state.loginStatus = "failed";
      state.loginError = action.payload || [];
    });

    builder.addCase(confirmEmail.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isEmailConfirmed = action.payload.isEmailConfirmed;
      state.isCookiesConfirmed = action.payload.isCookiesConfirmed;
    });
  },
});

export const { loadUser, logout } = authReducer.actions;

export default authReducer.reducer;
