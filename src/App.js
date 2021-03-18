import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Movie from "./components/Movie";
import KeyWordsGetMovie from "./components/KeyWordsGetMovie";
import Persons from "./components/Persons";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Movie/:id">
          <Movie />
        </Route>
        <Route path="/Keywords/:id">
          <KeyWordsGetMovie />
        </Route>
        <Route path="/Persons/:id">
          <Persons />
        </Route>
      </Switch>
    </Router>
  );
}
