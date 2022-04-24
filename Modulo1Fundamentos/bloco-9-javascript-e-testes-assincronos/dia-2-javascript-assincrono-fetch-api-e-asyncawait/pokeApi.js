function criarListaPokemon(data) {
    const caminhoUl = document.getElementById('pokemons');

    const criarLi = document.createElement('li');
    const criarDivLi = document.createElement('div');
    const criarImagem = document.createElement('img');
    const criarDivImagem = document.createElement('div');

    criarDivLi.innerHTML = data.name;
    criarImagem.src = data.imageUrl;
    criarDivImagem.appendChild(criarImagem);

    criarLi.appendChild(criarDivLi);
    criarLi.appendChild(criarDivImagem);

    caminhoUl.appendChild(criarLi);
};

function objetoPokemon (pokemon) {
return {
    name: pokemon.name,
    imageUrl: pokemon.sprites.front_default,
};
};

async function pegarApi (pokemons) {

    const resposta = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemons}`);
    const dados = await resposta.json();
    const pokemon = objetoPokemon(dados);

    criarListaPokemon(pokemon);
};

async function tiposPokemons () {
    await pegarApi ('pikachu');
    await pegarApi ('ditto');
    await pegarApi ('bulbasaur');
    await pegarApi ('charizard');
    await pegarApi ('squirtle');
};

window.onload = tiposPokemons;