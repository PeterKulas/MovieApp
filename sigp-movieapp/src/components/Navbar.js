import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <ul className={classes["navbar-links"]}>
        <Link to="/" className={classes["Link-style"]}>
          <li>Home</li>
        </Link>
        <Link to="/MovieSearch" className={classes["Link-style"]}>
          <li>Search Movies</li>
        </Link>
        <Link to="/Favourite" className={classes["Link-style"]}>
          <li>Favourites</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
