import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";
import axios from "axios";
import { TokenService } from "./interceptors/TokenService"; 

export const sendLoginSignup = createAsyncThunk(
  "/auth/sendLoginSignup",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    const tokenService = new TokenService();

    try {
      const response = await api.post("/auth/signin", { email, password });
      console.log("fetch login profile", response);

      if (response.data.success) {
        const token = response.data.data.token; 
        console.log("Extracted Token:", token);

        tokenService.setToken(token); 

        return token;
      } else {
        return rejectWithValue(response.data.message); 
      }
    } catch (error) {
      console.log("Error - - - ", error);
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
