import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import homepage from "./pages/homepage";
import movies from "./pages/movies";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route path="/movie/:id" component={movies} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
