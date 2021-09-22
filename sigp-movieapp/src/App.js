import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/Navbar";
import Favourite from "./components/Favourite";
import "./App.css";
import MovieSearch from "./components/MovieSearch";
import Home from "./components/Home";

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/MovieSearch" exact component={MovieSearch} />
        <Route path="/Favourite" component={Favourite} />
        <Route path="/MovieDetail/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
}

export default App;
