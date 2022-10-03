"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const un = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];
function conver(value, fromUnit, toUnit) {
    const fromIndex = un.indexOf(fromUnit);
    const toIndex = un.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(100, exponent);
}
;
console.log(conver(1, 'km²', 'm²'));
function exec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(un, "Escolha um número para a unidade base:");
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(un, "Escolha um número para a conversão:");
    const fromUnitChoice = un[fromUnitChoiceIndex];
    const toUnitChoice = un[toUnitChoiceIndex];
    const result = conver(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec();
