// utils/gptSlice.js
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieResults: null,
    movieNames:null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
        const { movieNames, movieResults } = action.payload;

      state.movieNames=movieNames;
        state.gptMovieResults = movieResults;

    },
  },
});

export const { toggleGptSearchView ,addGptMovieResults} = gptSlice.actions;

export default gptSlice.reducer;
