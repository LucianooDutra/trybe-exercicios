import "./App.css";
import React from "react";
import Pokedex from "./Pokedex";
import pokemons from "./data";
// import Button from './Button';

class App extends React.Component {
  render() {
    console.log(this);
    return (
      <main>
        <h1> Pokedex </h1>
        <div className="div">
          <Pokedex pokemon={pokemons} />
        </div>
      </main>
    );
  }
}

export default App;
