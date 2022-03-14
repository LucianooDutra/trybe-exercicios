/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// 1
function descrição() {
    document.getElementsByTagName('p')[0].innerText = 'Contratado como desenvolvedor web em uma empresa conceituada e com muito aprendizado.'
}
descrição();

// 2
function amareloPVerde() {
    document.getElementsByClassName('main-content')[0].style.background = 'rgb(76,164,109)';
}
amareloPVerde();

// 3
function vermelhoPBranco() {
    document.getElementsByClassName('center-content')[0].style.background = 'white';
}
vermelhoPBranco();

// 4
function correcao() {
    document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';
}
correcao();

// 5
function maiusculo() {
    let paragrafo = document.getElementsByTagName('p')[0];
    paragrafo.innerText = paragrafo.innerText.toUpperCase();
}
maiusculo();

// 6
function exibirP() {
    let paragrafos = document.getElementsByTagName('p');
    for (let i = 0; i < paragrafos.length; i += 1) {
        console.log(paragrafos[i].innerText)
    }
}
exibirP();