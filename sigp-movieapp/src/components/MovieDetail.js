import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { favouriteMovieActions } from "../store/favourites";
import { useSelector } from "react-redux";

import Paragraph from "./UI/Paragraph";
import classes from "./MovieDetail.module.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";

const MovieDetail = ({ match }) => {
  const [movieDetail, setMovieDetail] = useState({});
  const favourites = useSelector((state) => state.favouriteMovies);

  const url = `https://omdbapi.com/?apikey=dc9db5e0&i=${match.params.id}`;

  useEffect(() => {
    fetch(url)
      .then((respone) => {
        return respone.json();
      })
      .then((data) => {
        setMovieDetail(data);
      });
  }, []);

  const dispatch = useDispatch();

  const addMovieHandler = function () {
    if (
      !favourites.includes(movieDetail) &&
      !JSON.parse(localStorage.getItem("favourites")).includes(movieDetail)
    ) {
      dispatch(favouriteMovieActions.addMovie(movieDetail));
    }
  };

  return (
    <div className={classes["movieDetail-container"]}>
      <div className={classes["movieDetail-poster"]}>
        <img src={movieDetail.Poster} alt={movieDetail.Title} />
      </div>
      <div>
        <label className={classes["movieDetail-info"]}>
          <Typography variant="h4" gutterBottom>
            Title: {movieDetail.Title}
            <button onClick={addMovieHandler}>
              <StarBorderIcon color="action" fontSize="medium" />
            </button>
          </Typography>
          <Paragraph label={"Year:"} info={`${movieDetail.Year}`} />
          <Paragraph label={"Released:"} info={`${movieDetail.Released}`} />
          <Paragraph label={"Genre:"} info={`${movieDetail.Genre}`} />
          <Paragraph label={"Plot:"} info={`${movieDetail.Plot}`} />
          <Paragraph label={"Language:"} info={`${movieDetail.Language}`} />
          <Paragraph label={"Country:"} info={`${movieDetail.Country}`} />
          {movieDetail.Production && (
            <Paragraph
              label={"Production:"}
              info={`${movieDetail.Production}`}
            />
          )}
        </label>
      </div>
    </div>
  );
};

export default MovieDetail;
