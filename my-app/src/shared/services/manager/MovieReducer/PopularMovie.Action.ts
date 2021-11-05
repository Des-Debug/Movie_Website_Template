import { createAsyncThunk } from '@reduxjs/toolkit';
import MovieService from '../../api/MovieService';

export const getPopularMovie = createAsyncThunk(
    "popularMovie/getPopularMovie",
    async (params, thunkAPI) => {
    const response = await new MovieService().GetMoviePopularAsync();
    return response;
  }
)