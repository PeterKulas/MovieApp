import React, { useState, useEffect, Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Movies from "./Movies";

const MovieSearch = () => {
  const [movieArr, setMovieArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm")
  );

  const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=dc9db5e0`;

  useEffect(() => {
    fetch(url)
      .then((respone) => {
        return respone.json();
      })
      .then((data) => {
        setMovieArr(data.Search);
      });
  }, []);

  const submitHandler = function (event) {
    event.preventDefault();
    if (searchTerm) {
      fetch(url)
        .then((respone) => {
          return respone.json();
        })
        .then((data) => {
          setMovieArr(data.Search);
        });
    }
  };

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem("searchTerm", event.target.value);
  };

  return (
    <Fragment>
      <div className="form">
        <form onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            size="small"
            className="form-input"
            type="text"
            name="film"
            placeholder="Search"
            onChange={onChangeHandler}
          ></TextField>
          <Button type="submit" variant="contained">
            Search
          </Button>
        </form>
      </div>
      <div className="movie-container">
        {movieArr && <Movies movies={movieArr} />}
      </div>
    </Fragment>
  );
};

export default MovieSearch;
