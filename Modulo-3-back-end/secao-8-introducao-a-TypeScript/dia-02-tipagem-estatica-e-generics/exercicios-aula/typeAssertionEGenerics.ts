// Type Assertion (as Type)

// type Address = {
//   street: string,
//   number: number | null,
// }

// type User = {
//   name: string,
//   email: string,
//   password: string,
// }

// // função que converte de string para json
// function stringToJson(str: string): unknown {
//   const result = JSON.parse(str);
//   return result;
// }

// // utilizando o "as" para converter de unknown para User
// const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User

// // Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
// const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')

// user.name;
// console.log(user);
// address.street;
// console.log(address);


// Generics

type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}

// função que converte de string para json
// estamos recebendo um parâmetro genérico T na função destino e esperamos que seja retornado esse mesmo tipo.
function stringToJson<T>(str: string): T {
  const result = JSON.parse(str);
  return result;
}

// Na hora de utilizar a função basta somente informar o tipo que gostaríamos de obter. User substitui o T
const user = stringToJson<User>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');

const address =stringToJson<Address>('{"street":"Rua Tamarindo","number":1}')

user.name;
console.log(user);
address.street;
console.log(address);


// Mais exemplos curtos usando Generics

// EX 1
function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

const returnNumber = identity<number, string>(100, "Olá");
console.log(returnNumber);
const returnString = identity<string, string>("100", "Mundo");
console.log(returnString);
const returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");
console.log(returnBoolean);


// EX 2
function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items); // construindo um Array que só pode conter elementos do tipo T
}

const numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
console.log(numberArray);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

const stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
console.log(stringArray);
// stringArray.push(30); // Isto vai gerar um erro de compilação