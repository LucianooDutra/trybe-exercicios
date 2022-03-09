// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// const numero = 10 ;
// let resultado = 1 ;

// for ( let i = 1 ; i <= numero; i += 1) {
// resultado = resultado * [i]
// }

// console.log(resultado);



// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';

// let invertido = '';

// for (let i = word.length -1; i >= 0; i -= 1) {
//     invertido += word[i];
// }

// console.log (invertido);



// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let resultadoMaior = '';
let resultadoMenor = array[0];

for (let i = 0 ; i <= array.length; i += 1) {
    if (array[i] > resultadoMaior) {
        resultadoMaior = array[i];
    }
    else if (array[i] < resultadoMenor){
        resultadoMenor = array[i];
    }
}
console.log (resultadoMaior);
console.log (resultadoMenor);



// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let numerosprimos = 0;

for (let i = 1; i <= 50; i += 1){
    
}