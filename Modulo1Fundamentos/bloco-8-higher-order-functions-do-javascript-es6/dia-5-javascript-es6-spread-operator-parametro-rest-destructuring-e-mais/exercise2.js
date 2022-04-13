// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = ((...numbers) => numbers.reduce(((acc, numero) => acc + numero), 0));

console.log(sum(1,2,3,4,5,6,7,8,9,10));

