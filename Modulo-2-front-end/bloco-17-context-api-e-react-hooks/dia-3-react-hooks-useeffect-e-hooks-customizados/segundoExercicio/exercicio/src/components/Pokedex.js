import React, { useState, useEffect } from 'react';
import BestPokemon from './BestPokemon';
import usePokemonSprite from '../hooks/usePokemonSprite';

function Pokedex() {
  // estado pra armazenar a lista de pokemons
  const [pokemonList, setPokemonList] = useState([]);
  // estado pra armazenar meu número de pokemons que quero mostrar
  const [limit, setLimit] = useState(10);
  // estado pra deixar visivel ou não o melhor pokemon
  const [visible, setVisible] = useState(false);
  // recuperei os meus dados do meu hook 
  const [pokemonImage, setPokemonUrl] = usePokemonSprite();

  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  const getPokemons = async () => {
    const data = await fetch(endpoint).then(response => response.json())
    const { results } = data;
    // console.log(results);
    setPokemonList(results);
  };

  const handleAddLimit = () => {
    setLimit((state) => state + 10);
  };

  // didMount + didUpdate
  useEffect(() => {
    getPokemons();
    // toda vez que o limit alterar ele vai executar a função getPokemons
  }, [limit]);

  // didUpdate => para qualquer estado do componente
  // se não passar o segundo parametro, toda vez que o estado for atualizado ele renderiza algo
  useEffect(() => console.log("atualizou o estado"));

  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemonImage && <img src={pokemonImage} alt="imgem pokemon" />}
      <div>
        <button
          type="button"
          onClick={handleAddLimit}
        >
          Buscar mais pokemons
        </button>
        <button
          type="button"
          onClick={() => setVisible(!visible)}
        >
          Mostrar o melhor pokemon
        </button>
        {visible && <BestPokemon />}
        <ul>
          {pokemonList.map(({ name, url }) => (
            <li
              key={name}
              onClick={() => setPokemonUrl(url)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Pokedex;
