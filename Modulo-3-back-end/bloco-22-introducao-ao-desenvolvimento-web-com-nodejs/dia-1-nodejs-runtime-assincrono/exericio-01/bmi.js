const readLine = require('readline-sync');



const weightInKg = readLine.questionFloat('Digite o seu peso: ');
const heightInM = readLine.questionFloat('Digite sua altura: ');

const calculoIMC = (weight, height) => {
  const result = (weight / (height ** 2));
  return result;
}

switch (calculoIMC) {
  case calculoIMC < 18.5:
    console.log(`O resultado do IMC foi: ${calculoIMC}. Situação: Abaixo do peso(magreza).`);
    break;
  case calculoIMC >= 18.5 && calculoIMC <= 24.9:
    console.log(`O resultado do IMC foi: ${calculoIMC}. Situação: Peso normal.`);
    break;
  case calculoIMC >= 25.0 && calculoIMC <= 29.9:
    console.log(`O resultado do IMC foi: ${calculoIMC}. Situação: Acima do peso (sobrepeso).`);
    break;
  case calculoIMC >= 30.0 && calculoIMC <= 34.9:
    console.log(`O resultado do IMC foi: ${calculoIMC}. Situação: Obesidade grau I.`);
    break;
  case calculoIMC >= 35.0 && calculoIMC <= 39.9:
    console.log(`O resultado do IMC foi: ${calculoIMC}. Situação: Obesidade grau II.`);
    break;
  case calculoIMC > 40.0:
    console.log(`O resultado do IMC foi: ${calculoIMC}. Situação: Obesidade graus III e IV.`);
    break;
  default:
    console.log('A operação é desconhecida ou não foi implementada');
};

console.log(calculoIMC(weightInKg, heightInM));
