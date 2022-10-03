import readline from "readline-sync";

const unit = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function converted(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unit.indexOf(fromUnit);
  const toIndex = unit.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
};

console.log(converted(1, 'kg', 'g'));

function exec() {
  // pegamos o valor a ser convertido digitado pela pessoa usuária
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");

  // pedimos que a pessoa usuária escolha a unidade base
  const fromUnitChoiceIndex = readline.keyInSelect(unit, "Escolha um número para a unidade base:");

  // pedimos que a pessoa usuária escolha a unidade para conversão
  const toUnitChoiceIndex = readline.keyInSelect(unit, "Escolha um número para a conversão:");


  const fromUnitChoice = unit[fromUnitChoiceIndex];
  const toUnitChoice = unit[toUnitChoiceIndex];

  const result = converted(value, fromUnitChoice, toUnitChoice)

  // montamos a mensagem de saída
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

  // printamos a mensagem de saída no terminal
  console.log(message);
}

exec();