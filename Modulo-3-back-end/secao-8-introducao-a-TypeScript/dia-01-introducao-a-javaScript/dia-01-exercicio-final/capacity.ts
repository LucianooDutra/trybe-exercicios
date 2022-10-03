import readline from "readline-sync";

const uni = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function converts(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = uni.indexOf(fromUnit);
  const toIndex = uni.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
};

console.log(converts(1, 'l', 'ml'));

function exec() {
  // pegamos o valor a ser convertido digitado pela pessoa usuária
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");

  // pedimos que a pessoa usuária escolha a unidade base
  const fromUnitChoiceIndex = readline.keyInSelect(uni, "Escolha um número para a unidade base:");

  // pedimos que a pessoa usuária escolha a unidade para conversão
  const toUnitChoiceIndex = readline.keyInSelect(uni, "Escolha um número para a conversão:");


  const fromUnitChoice = uni[fromUnitChoiceIndex];
  const toUnitChoice = uni[toUnitChoiceIndex];

  const result = converts(value, fromUnitChoice, toUnitChoice)

  // montamos a mensagem de saída
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

  // printamos a mensagem de saída no terminal
  console.log(message);
}

exec();