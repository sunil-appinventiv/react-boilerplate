import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api';

// Async thunk to fetch movies
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/v1/images/search?limit=10?api_key=live_qeeooGaohH2YNiVllsBlyBCUu2ZI4o8Ud5JGHJEKxOjLC2OvUlDtHXi8agbzE3Dh');
      console.log(response, '******')
      return response.data; // Assuming the response structure
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
