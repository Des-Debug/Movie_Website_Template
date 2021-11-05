import { createSlice } from '@reduxjs/toolkit'
import { IMainMovie } from '../../api/dto/IMainMovie.Dto';
import { getPopularMovie } from './PopularMovie.Action';

const initialState: IMainMovie = { page:0, results: [], total_pages: 0, total_results: 0 };

export const movieSlice = createSlice({
    name: "popularMovie",
    initialState,
    reducers: {
    },
    extraReducers:(builder) => {
      builder.addCase(getPopularMovie.fulfilled, (state, action) => {
        state = {...action.payload};
        return state;
      })
    }
  })
  
//   // Action creators are generated for each case reducer function
// export const { } = movieSlice.actions
  
export default movieSlice.reducer