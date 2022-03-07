// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 50;
const b = 60;

// var soma = a+b;
// console.log(soma);
// var subtracao = a-b;
// console.log(subtracao);
// var multiplicacao = a*b;
// console.log(multiplicacao);
// var divisao = a/b;
// console.log(divisao);
// var resto = a%b;
// console.log(resto);


// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// if (a>b) {
//     console.log(a);
// }
// else {
//     console.log(b)
// }

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const c = 80;

// if (a>b && a>c) {
//     console.log(a);
// }
// else if (b>a && b>c) {
//     console.log(b);
// }
// else if (c>a && c>b)
//     console.log (c);

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
// const d = "negativo";
// switch (d) {
//     case "positivo":
//         console.log("positive");
//         break;
//         case "negativo":
//         console.log("negative");
//         break;
//         default:
//         console.log("zero");
// }

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
// const anguloA = 0;
// const anguloB = 0;
// const anguloC = 180;

// if (anguloA+anguloB+anguloC===180) {
//     console.log("true");
// }
// else if (anguloA+anguloB+anguloC<180 && anguloA+anguloB+anguloC>0 || anguloA+anguloB+anguloC>180) {
//     console.log("false");
// }
// else if (anguloA+anguloB+anguloC<0)
//     console.log("inválido")


// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)


// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
const nota = 80

if (nota >= 90 && nota<= 100) {
    console.log ("A");
}
else if (nota >= 80 && nota<90) {
    console.log ("B");
}
else if (nota >= 70 && nota<80) {
    console.log ("C");
}
else if (nota >= 60 && nota<70) {
    console.log ("D");
}
else if (nota >= 50 && nota<60) {
    console.log ("E");
}
else if (nota >= 0 && nota<50) {
    console.log ("F");
}
else if (nota < 0 && nota>100) 
    console.log ("Erro!");
