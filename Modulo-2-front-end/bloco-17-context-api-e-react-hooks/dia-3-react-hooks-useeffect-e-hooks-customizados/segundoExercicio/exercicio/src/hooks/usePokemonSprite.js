import { useState, useEffect } from 'react';

const usePokemonSprite = () => {
  // estado que armazenará minha url do pokemon pra fazer a requisição e pegar a imagem
  const [pokemonUrl, setPokemonUrl] = useState('');
  // estado que armazenará o src da minha imagem.
  const [pokemonImage, setPokemonImage] = useState('');

  // função que faz a requisição e pega o src da minha img e coloca no meu estado.
  const getPokemonImage = async () => {
    const { sprites } = await fetch(pokemonUrl).then((response) => response.json());
    const { front_default: sprite } = sprites;
    setPokemonImage(sprite);
  };

  // Meu hook personalizado
  useEffect(() => {
    if (pokemonUrl) { getPokemonImage(); }
  }, [pokemonUrl]);
  return [pokemonImage, setPokemonUrl];
};

export default usePokemonSprite;
