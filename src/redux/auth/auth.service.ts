import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, LoginUser } from "../../types/types";
import axios from "axios";

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
      const { access_token } = response.data;
      localStorage.setItem("access_token", access_token); // Save access_token to local storage
      return response.data;
    } catch (error: any) {
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

export const confirmEmail = createAsyncThunk(
  "auth/confirmEmail",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/${id}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
