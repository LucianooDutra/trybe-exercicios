// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// const a = 50;
// const b = 60;

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

// const c = 80;

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
// const pecaXadre = "rei";

//     const pecaXadrez = "peao";
// switch (pecaXadrez) {
//     case "peao":
//         console.log("move-se para frente, 1 casa por vez");
//         break;
//         case "bispo":
//         console.log("linha reta, diagonalmente, quantas casas quiser");
//         break;
//         case "torre":
//         console.log("linha reta, horizontalmente e verticalmente, quantas casas quiser até a proxima peça");
//         break;
//         case "cavalo":
//         console.log("movimentos em L, 2 casas pra um lado + 1 pra outro");
//         break;
//         case "rainha":
//         console.log("quantas casas quiser em qualquer direção");
//         break;
//         case "rei":
//         console.log("apenas 1 casa em qualquer direção");
//         break;
//         default:
//         console.log("Erro!");
// }



// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
// const nota = 80

// if (nota >= 90 && nota<= 100) {
//     console.log ("A");
// }
// else if (nota >= 80 && nota<90) {
//     console.log ("B");
// }
// else if (nota >= 70 && nota<80) {
//     console.log ("C");
// }
// else if (nota >= 60 && nota<70) {
//     console.log ("D");
// }
// else if (nota >= 50 && nota<60) {
//     console.log ("E");
// }
// else if (nota >= 0 && nota<50) {
//     console.log ("F");
// }
// else if (nota < 0 && nota>100) 
//     console.log ("Erro!");



// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

// const a = 2;
// const b = 15;
// const c = 5;

// if (a%2 === 0 || b%2 === 0 || c%2 === 0) {
//     console.log ("true");
// }
// else {
//     console.log ("false");
// }


// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

// const a = 3;
// const b = 4;
// const c = 8;

// if (a%2 !== 0 || b%2 !== 0 || c%2 !== 0) {
//     console.log ("true");
// }
// else {
//     console.log ("false");
// }


// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

// const custoProduto = 100;
// const valorVenda = 200;
// const impostoSobreCusto = (20/100) * custoProduto;
// const custoFinal = custoProduto + impostoSobreCusto;
// const lucro = valorVenda - custoFinal;
// // console.log(lucro) ; 
// if (custoProduto <= 0 || valorVenda <=0 || custoFinal <=0 || lucro <=0) {
//     console.log ("Erro!");
// }


// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

