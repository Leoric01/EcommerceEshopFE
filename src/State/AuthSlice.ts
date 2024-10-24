import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";
import axios from "axios";

export const sendLoginSignup = createAsyncThunk(
    "/auth/sendLoginSignup",
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/signin", { email, password });
            console.log("fetch login profile", response);

            if (response.data.success) {
                const token = response.data.data.token;  // Extract the JWT token
                console.log("Extracted Token:", token);
                
                localStorage.setItem("jwt", token);
                
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