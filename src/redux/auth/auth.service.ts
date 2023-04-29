import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, LoginUser } from "../../types/types";

export interface CreateUserPayload {
  user: User;
}

export interface LoginUserPayload {
  user: LoginUser;
}

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ user }: CreateUserPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/register`,
        user
      );
      return response.data;
    } catch (error: any) {
      // You can handle errors by returning a rejected action object with the error message.
      // The error message will be available in the `error.message` property of the action object.
      return rejectWithValue(error.response.data);
    }
  }
);

export const loggedInUser = createAsyncThunk(
  "auth/loginUser",
  async ({ user }: LoginUserPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        user
      );
      const { access_token } = response.data;
      localStorage.setItem("access_token", access_token); // Save access_token to local storage
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
