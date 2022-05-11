import React from "react";
import Pokemon from "./Pokemon";
import Button from "./Button";

class Pokedex extends React.Component {
  state = {
    pokemonIndex: 0,
    filteredType: "all",
  };

  filterPokemons = (filteredType) => {
    this.setState({ filteredType, pokemonIndex: 0 });
  };

  nextPokemon = (numberOfPokemons) => {
    // const { pokemon } = this.props;
    this.setState((estadoAnterior, _props) => ({
      pokemonIndex: (estadoAnterior.pokemonIndex + 1) % numberOfPokemons,
    }));
    // if (this.state.pokemonIndex === pokemon.length - 1) {
    //   this.setState((estadoAnterior, _props) => ({
    //     pokemonIndex: (estadoAnterior.pokemonIndex = 0),
    //   }));
    // }
  };

  fetchFilteredPokemons() {
    const { pokemon } = this.props;
    const { filteredType } = this.state;

    return pokemon.filter((pokemon) => {
      if (filteredType === "all") return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const { pokemon } = this.props;

    return [
      ...new Set(pokemon.reduce((types, { type }) => [...types, type], [])),
    ];
  }

  render() {
    // const { pokemon } = this.props;
    const pokemonTypes = this.fetchPokemonTypes();
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemon2 = filteredPokemons[this.state.pokemonIndex];

    // console.log(pokemon[this.state.pokemonIndex]);
    return (
      <div>
        <div>
          <Pokemon
            key={pokemon2.id}
            poke={pokemon2}
          />
        </div>
        <div>
          <Button
            onClick={() => this.filterPokemons("all")}
            className="filter-button"
          >
            Todos
          </Button>
          {pokemonTypes.map((type) => (
            <Button
              key={type}
              onClick={() => this.filterPokemons(type)}
              className="filter-button"
            >
              {type}
            </Button>
          ))}
        </div>
        <div>
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={filteredPokemons.length <= 1}
        >
          Próximo pokémon
        </Button>
          {/* <button className="buttonProximo" onClick={this.nextPokemon}>
            Próximo pokemon
          </button> */}
        </div>
      </div>
    );
  }
}

export default Pokedex;
