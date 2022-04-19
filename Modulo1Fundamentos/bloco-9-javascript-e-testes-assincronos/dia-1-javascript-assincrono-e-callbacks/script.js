// 1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
// `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
// name: "Mars",
// distanceFromSun: {
//   value: 227900000,
//   measurementUnit: "kilometers",
// },
// };

// const venus = {
// name: "Venus",
// distanceFromSun: {
//   value: 108200000,
//   measurementUnit: "kilometers",
// },
// };

// const jupiter = {
// name: "Jupiter",
// distanceFromSun: {
//   value: 778500000,
//   measurementUnit: "kilometers",
// },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// Resposta: A, B e C.


// 2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// Resposta: A, C e B.

// 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

// const getPlanet = () => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     setTimeout(() => console.log("Returned planet: ", mars), 4000);
//   };
  
//   getPlanet(); // imprime Marte depois de 4 segundos
  
//   4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// const sendMarsTemperature = (() => {
// const resultado = getMarsTemperature();
// setTimeout(() => console.log(`Mars temperature is: ${resultado} degree Celsius`), messageDelay());
// });

// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// 5 - Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature uma callback que contenha as ações a serem tomadas em cima da temperatura.

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...

// const sendMarsTemperature = ((temperature) => {
// const resultado = getMarsTemperature();
// setTimeout(() => temperature(resultado), messageDelay());
// });

// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo


// 6 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// // definição da função sendMarsTemperature...

// const sendMarsTemperature = (temperature, onErro) => {
// const resultado = getMarsTemperature();
// const messageSuccessfullySent = Math.random() <= 0.6;
// setTimeout(() => {
//     if(messageSuccessfullySent) temperature(resultado)
//     else onErro('Robot is busy');
// }, messageDelay());
// }


// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);


// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

// const uppercase = (str, callback) => {
//     setTimeout(() => {
//       callback(str.toUpperCase());
//     }, 500);
//   };

//   it('testar a palavra "novo" pra sair "NOVO"', (done) => {
//       uppercase('novo', (str) => {
//           try {
//               expect(str).toBe('NOVO');
//               done();
//           } catch (error) {
//               done(error);
//           }
//       });
//   });


//   8 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon! No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle. Complete a chamada da função getPokemonDetails de modo que ela imprima no console os detalhes do pokémon que você escolheu. PS: é possível que o sistema do Professor Carvalho apresente erros caso o pokémon não exista no banco de dados, então não se esqueça de tratá-los também, combinado?

// const pokemons = [
//     {
//       name: 'Bulbasaur',
//       type: 'Grass',
//       ability: 'Razor Leaf',
//     },
//     {
//       name: 'Charmander',
//       type: 'Fire',
//       ability: 'Ember',
//     },
//     {
//       name: 'Squirtle',
//       type: 'Water',
//       ability: 'Water Gun',
//     },
//   ];
  
//   function getPokemonDetails(filter, callback) {
//     setTimeout(() => {
//       if (pokemons.find(filter) === undefined) {
//         return callback(new Error('Não temos esse pokemon para você :('), null);
//       }
//       const pokemon = pokemons.find(filter);
  
//       const { name, type, ability } = pokemon;
  
//       const messageFromProfOak = `Olá, seu pokemon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
//       callback(null, messageFromProfOak);
//     }, 2000);
//   }
  
//   getPokemonDetails(
//     (pokemon) => pokemon.name === 'Bulbasaur',
//     (error, message) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(message);
//       }
//     }
//   );
  
//   module.exports = {
//     getPokemonDetails,
//   };


//   9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
// const { getPokemonDetails } = require("./get-pokemon-details");

// describe("A função getPokemonDetails", () => {
//   it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
//     // Escreva aqui seu código
//     const expectedError = new Error('Não temos esse pokémon para você :(');

//     function callback(error, result) {
//       expect(error).toEqual(expectedError);
//       done();
//     }
    
//     getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
// });


//   it("retorna um pokemon que existe no banco de dados", (done) => {
//     // Escreva aqui seu código
//     const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

//     function callback(err, result) {
//       expect(result).toBe(expectedString);
//       done();
//     }

//     getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
//   });
// });



// 10 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1 - beforeEach // antes de cada teste
// 1 - test // o teste
// 1 - afterEach // depois de cada teste
// 1 - beforeEach // antes de cada teste
// 2 - beforeEach // antes de cada teste dentro do describe
// 2 - test // o teste dentro do describe
// 2 - afterEach // depois de cada teste dentro do describe
// 1 - afterEach // depois de cada teste