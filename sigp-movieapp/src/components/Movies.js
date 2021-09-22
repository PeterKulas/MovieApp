import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { favouriteMovieActions } from "../store/favourites";
import Button from "@material-ui/core/Button";
import Movie from "./Movie";

const Movies = ({ movies, inFavourites }) => {
  const dispatch = useDispatch();

  const temp = movies.map((movie) => {
    return (
      <div>
        {inFavourites && (
          <Button
            type="submit"
            variant="contained"
            onClick={() => {
              dispatch(favouriteMovieActions.removeMovie(movie.imdbID));
            }}
          >
            Remove
          </Button>
        )}
        <Movie
          key={movie.imdbID}
          imdbID={movie.imdbID}
          Poster={movie.Poster}
          Title={movie.Title}
        />
      </div>
    );
  });
  return <Fragment>{temp}</Fragment>;
};

export default Movies;
