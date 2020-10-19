import React from "react";
import { Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Timer from "./pages/Timer";
import "./App.css";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">Recetas</Link>
          </header>

          <main>
            <Route exact path="/" component={Home} />
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route path="/timer" component={Timer} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
