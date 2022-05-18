// import React from "react";
// // import FiltroPokemon from "./FiltroPokemon";
// import Pokemon from "./Pokemon";
// import pokemons from "./data";

// class Texto4 extends React.Component {
//   buscarPokemon = () => {
//     const { ship } = this.props.match.params;
//     return pokemons.filter((pokemon) => {
//       if (pokemon.id === ship) return pokemon;
//       return pokemon;
//     });
//   };

//   render() {
//     //   peguei o meu ship, no caso será qualquer coisa que digitar na minha URL
//     //  Então posso utilizar essa palavra ou numero digitado pra fazer uma busca por algum valor dentro da minha API que exporto
//     // ex. API mercado livre, posso colocar um número e pelo número digitado vai ser feita uma busca dentro da API por um id e retornar um produto
//     const { ship } = this.props.match.params;
//     console.log(ship);
//     return (
//       <div>
//         <h3>
//           Texto 4 com a props name: {this.props.name}, fazendo: {ship}{" "}
//         </h3>
//         <Pokemon pokemon={this.buscarPokemon()} />
//       </div>
//     );
//   }
// }

// export default Texto4;
