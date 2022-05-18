import React from "react";
import "./App.css";
import pokemons from "./data";
import Pokedex from "./Pokedex";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Texto4 from "./Texto4";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Pokedex pokemons={pokemons} />}
          />
          {/* <Route
            path="/Texto4/:ship"
            render={(props) => <Texto4 {...props} name="Luciano Dutra" />}
          /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
