function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


//   Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criacaoDias() {

    // como minha ul ja esta criada no html, so pego o id days que esta dentro dela pra armazenar todas minhas li no final

    let listaDias = document.querySelector('#days');

    // percorrer todos os elementos da array e adicionar em outra variável separada
    for (let i = 0; i < dezDaysList.length; i += 1) {
        let resultadoDaLista = dezDaysList[i];

        let dia = document.createElement('li');

        if (resultadoDaLista === 24 | resultadoDaLista === 31) {
            // primeiro acrescentar a classe da li
            dia.className = 'day holiday';
            // segundo acrescentar o mesmo texto que foi percorrido pelo for na li
            dia.innerHTML = resultadoDaLista;
            // terceiro adicionar a li dentro do caminha que contém o id days
            listaDias.appendChild(dia);
        }
        else if (resultadoDaLista === 4 | resultadoDaLista === 11 | resultadoDaLista === 18) {
            dia.className = 'day friday';
            dia.innerHTML = resultadoDaLista;
            listaDias.appendChild(dia);
        }
        else if (resultadoDaLista === 25) {
            dia.className = 'day holiday friday';
            dia.innerHTML = resultadoDaLista;
            listaDias.appendChild(dia);
        }
        else {
            dia.innerHTML = resultadoDaLista;
            dia.className = 'day';
            listaDias.appendChild(dia);
        }
    }
}

criacaoDias();


// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

// Criar uma função
function botaoFeriados(valor) {

    // Selecionar o elemento que irá receber o botão, no caso a classe 'buttons-container'.
    let feriados = document.querySelector('.buttons-container');

    // Criar o botão usando o 'button', se fosse um paragrafo seria 'p'
    let feriadosdois = document.createElement('button');

    // Criar a variavel que guardará o id do botão
    let feriadosID = 'btn-holiday';

    // configurar meu botão
    // O nome do botão será o parametro recebido dentro da função, no caso 'feriados'
    feriadosdois.innerHTML = valor;

    // Adicionar o id ao botão
    feriadosdois.id = feriadosID;

    // Adicionar a variavel 'feriadodois' ja toda configurada pra o elemento criado no inicio pra receber o botão na classe 'buttons-container'
    feriados.appendChild(feriadosdois);

};

// Chamar a função pra ser executada
botaoFeriados('feriados');



// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function funcaoUm() {

    let localBotaoGeral = document.querySelector('#btn-holiday');
    let botaoFeriadoMudaCor = document.querySelectorAll('.holiday');
    let novaCor = 'rgb(238,238,238)';
    let antigaCor = 'white';


    localBotaoGeral.addEventListener('click', function () {
        for (let i = 0; i < botaoFeriadoMudaCor.length; i += 1) {
            if (botaoFeriadoMudaCor[i].style.backgroundColor === antigaCor) {
                botaoFeriadoMudaCor[i].style.backgroundColor = novaCor;
            }
            else {
                botaoFeriadoMudaCor[i].style.backgroundColor = antigaCor;
            }
        }
    })
};

funcaoUm();

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .


// mesmo passo a passo do exercicio 2

function criarBotaoSextaFeira(valor) {
    let caminhoFinal = document.querySelector('.buttons-container');
    let botaoinicial = document.createElement('button');
    let IDSextaFeira = 'btn-friday';

    botaoinicial.innerHTML = valor;
    botaoinicial.id = IDSextaFeira;
    caminhoFinal.appendChild(botaoinicial);
};

criarBotaoSextaFeira('Sexta-feira');


// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.


function sextaras(valor) {

    let caminhoFinal = document.querySelector('#btn-friday');
    let diasSexta = document.querySelectorAll('.friday');
    let texto = 'sextar!! o/';


    caminhoFinal.addEventListener('click', function () {
        for (let i = 0; i < diasSexta.length; i += 1) {

            if (diasSexta[i].innerHTML !== texto) {
                diasSexta[i].innerHTML = texto;
            }
            else {
                diasSexta[i].innerHTML = valor[i];
            }
        }
    })
};
let sextas = [4, 11, 18, 25];
sextaras(sextas);


// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function aumentarZoomm() {

    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function(event) {
        event.target.style.fontsize = '30px';
        event.target.style.fontweight = '600';
    })
};

function diminuirZoom() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function(event) {
        event.target.style.fontweight = '200';
        event.target.style.fontsize = '20px';
    })
};

aumentarZoomm();
diminuirZoom();



// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .




// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .




// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.




// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .




// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key .



