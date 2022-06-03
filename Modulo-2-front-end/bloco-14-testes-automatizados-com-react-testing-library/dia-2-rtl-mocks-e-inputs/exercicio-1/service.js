// função que faz um número aleatório
const randomNumber = () => Math.floor(Math.random() * 101);
// função que recebe uma string e devolve em caixa alta
const firstFunction = (str) => str.toUpperCase();
// função que recebe uma string e devolve só a 1° letra
const secondFunction = (str) =>  str.charAt(0);
// função que recebe 2 strings e concatena (junta)
const thirdFunction = (str1, str2) => str1.concat(str2);
// Crie uma função que faça requisição para a api dog pictures
function fetchDog() {
    return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
      response
        .json()
        .then(json =>
          response.ok ? Promise.resolve(json) : Promise.reject(json)
        )
    );
  }

module.exports = {
    randomNumber,
    firstFunction,
    secondFunction,
    thirdFunction,
    fetchDog,
};