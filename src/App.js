import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Search from "./components/Search"
import Movie from "./components/Movie"

export default function App() {
  return (
    <Router>
      <div>

      <NavBar />
  
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/Search">
            <Search />
          </Route>

          <Route path="/Movie/:id">
            <Movie />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

