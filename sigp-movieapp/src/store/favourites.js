import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteMovies: JSON.parse(localStorage.getItem("favourites")),
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: initialState,
  reducers: {
    addMovie(state, action) {
      state.favouriteMovies.push(action.payload);
    },

    removeMovie(state, action) {
      state.favouriteMovies = state.favouriteMovies.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },

    removeAll(state) {
      state.favouriteMovies = [];
    },
  },
});

export const favouriteMovieActions = favouritesSlice.actions;
export default favouritesSlice.reducer;
