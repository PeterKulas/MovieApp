import React, { Fragment, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { favouriteMovieActions } from "../store/favourites";
import Button from "@material-ui/core/Button";

import Movies from "./Movies";

const Favourite = () => {
  const favourites = useSelector((state) => state.favouriteMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const removeAllHandler = () => {
    dispatch(favouriteMovieActions.removeAll());
  };

  return (
    <Fragment>
      {favourites.length === 0 ? (
        <Typography variant="h4" component="div" align="center" gutterBottom>
          No favourite movies
        </Typography>
      ) : (
        <Typography component="div" align="right">
          <Button type="button" variant="contained" onClick={removeAllHandler}>
            Clear all
          </Button>
          <Typography
            variant="h4"
            component="div"
            align="center"
            gutterBottom
          >{`${favourites.length} favourite ${
            favourites.length === 1 ? "movie" : "movies"
          }`}</Typography>
          <div className="movie-container">
            {favourites && <Movies movies={favourites} inFavourites={true} />}
          </div>
        </Typography>
      )}
    </Fragment>
  );
};

export default Favourite;
