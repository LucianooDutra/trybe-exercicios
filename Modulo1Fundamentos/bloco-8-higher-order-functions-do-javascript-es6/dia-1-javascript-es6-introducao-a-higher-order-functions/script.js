// Item 1
const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const pessoa = (nome) => `Nome completo: ${nome}, Email: ${nome.replace(' ', '_').toLowerCase()}@trybe.com`;

//   console.log(newEmployees(pessoa));

//   Item 2

// 2° fazer a função, meu callback que é comparar dois numeros
const verificarNumeros = (meuNumero, numeroAleatorio) => meuNumero === numeroAleatorio;

// 1° fazer a função principal que vai gerar os numeros, sendo o 1° parametro o numero escohido e o 2° a minha função callback
const resultadoLoteria = (meuNumero, callback) => {
    // A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
    // A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo).
    // *5 pra o numero ir de 1 a 5, e +1 pra ir também de 1 a 5.
let numeroAleatorio = Math.floor((Math.random() * 5) +1);

return callback(meuNumero, numeroAleatorio) ? 'Parabéns você ganhou' : 'Tente novamente';
};

// console.log(resultadoLoteria(5, verificarNumeros));


// Item 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

