import customAxios from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCatsData= createAsyncThunk('cats/fetchData', 
async (_, { rejectWithValue }) => {
    try {

      const response = await customAxios.get('/v1/images/search?limit=10?api_key=live_qeeooGaohH2YNiVllsBlyBCUu2ZI4o8Ud5JGHJEKxOjLC2OvUlDtHXi8agbzE3Dh');
      return response.data; // Assuming the response structure
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)