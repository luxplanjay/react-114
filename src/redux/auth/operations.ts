import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  AuthResponse,
  RefreshResponse,
  UserLoginValues,
  UserRegisterValues,
} from "../../types/auth";
import type { RootState } from "../store";

axios.defaults.baseURL = "https://task-manager-api.goit.global/";

const setAuthHeader = (value: string) => {
  axios.defaults.headers.common.Authorization = value;
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 *
 * After successful registration, add the token to the HTTP header
 */
export const register = createAsyncThunk(
  "auth/register",
  async (values: UserRegisterValues) => {
    const res = await axios.post<AuthResponse>("/users/signup", values);
    setAuthHeader(`Bearer ${res.data.token}`);
    return res.data;
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 *
 * After successful login, add the token to the HTTP header
 */
export const logIn = createAsyncThunk(
  "auth/login",
  async (values: UserLoginValues) => {
    const res = await axios.post<AuthResponse>("/users/login", values);
    setAuthHeader(`Bearer ${res.data.token}`);
    return res.data;
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 *
 * After a successful logout, remove the token from the HTTP header
 */
export const logOut = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  setAuthHeader("");
});

/*
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const reduxState = thunkApi.getState() as RootState;
    setAuthHeader(`Bearer ${reduxState.auth.token}`);
    const res = await axios.get<RefreshResponse>("/users/me");
    return res.data;
  },
  {
    condition: (_, thunkApi) => {
      const reduxState = thunkApi.getState() as RootState;
      return reduxState.auth.token !== null;
    },
  }
);
