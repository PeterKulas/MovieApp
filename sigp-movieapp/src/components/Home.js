import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  return (
    <Fragment>
      <Typography variant="h2" component="div" align="center" gutterBottom>
        Welcome on this page
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        You can search for movies by click on Search Movies in header.
      </Typography>
    </Fragment>
  );
};

export default Home;
