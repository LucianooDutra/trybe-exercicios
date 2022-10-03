import readline from "readline-sync";

const u = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function conve(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = u.indexOf(fromUnit);
  const toIndex = u.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(1000, exponent);
};

console.log(conve(1, 'km³', 'm³'));

function exec() {
  // pegamos o valor a ser convertido digitado pela pessoa usuária
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");

  // pedimos que a pessoa usuária escolha a unidade base
  const fromUnitChoiceIndex = readline.keyInSelect(u, "Escolha um número para a unidade base:");

  // pedimos que a pessoa usuária escolha a unidade para conversão
  const toUnitChoiceIndex = readline.keyInSelect(u, "Escolha um número para a conversão:");


  const fromUnitChoice = u[fromUnitChoiceIndex];
  const toUnitChoice = u[toUnitChoiceIndex];

  const result = conve(value, fromUnitChoice, toUnitChoice)

  // montamos a mensagem de saída
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

  // printamos a mensagem de saída no terminal
  console.log(message);
}

exec();