"use strict";
// Type Assertion (as Type)
// função que converte de string para json
// estamos recebendo um parâmetro genérico T na função destino e esperamos que seja retornado esse mesmo tipo.
function stringToJson(str) {
    const result = JSON.parse(str);
    return result;
}
// Na hora de utilizar a função basta somente informar o tipo que gostaríamos de obter. User substitui o T
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');
const address = stringToJson('{"street":"Rua Tamarindo","number":1}');
user.name;
console.log(user);
address.street;
console.log(address);
// Mais exemplos curtos usando Generics
// EX 1
function identity(value, message) {
    console.log(message);
    return value;
}
const returnNumber = identity(100, "Olá");
console.log(returnNumber);
const returnString = identity("100", "Mundo");
console.log(returnString);
const returnBoolean = identity(true, "Olá, Mundo!");
console.log(returnBoolean);
// EX 2
function getArray(items) {
    return new Array().concat(items); // construindo um Array que só pode conter elementos do tipo T
}
const numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25);
console.log(numberArray);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
const stringArray = getArray(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
console.log(stringArray);
// stringArray.push(30); // Isto vai gerar um erro de compilação
