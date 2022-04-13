// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

const myList = [1, 2, 3];

// escreva swap abaixo

const [primeiraPosicao, segundaPosicao, terceiraPosicao] = myList;
const swap = () => `${terceiraPosicao} ${segundaPosicao} ${primeiraPosicao}`;
console.log(swap());


const swap2 = ([a, b, c]) => [c, b, a];
console.log(swap2(myList));