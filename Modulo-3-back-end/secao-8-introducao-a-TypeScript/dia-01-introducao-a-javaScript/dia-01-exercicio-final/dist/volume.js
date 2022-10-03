"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const u = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function conve(value, fromUnit, toUnit) {
    const fromIndex = u.indexOf(fromUnit);
    const toIndex = u.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(1000, exponent);
}
;
console.log(conve(1, 'km³', 'm³'));
function exec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(u, "Escolha um número para a unidade base:");
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(u, "Escolha um número para a conversão:");
    const fromUnitChoice = u[fromUnitChoiceIndex];
    const toUnitChoice = u[toUnitChoiceIndex];
    const result = conve(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec();
