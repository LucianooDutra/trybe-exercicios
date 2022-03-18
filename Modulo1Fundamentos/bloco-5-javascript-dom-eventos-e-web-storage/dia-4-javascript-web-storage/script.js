
// primeiro irei fazer todo o meu código js, após a paguina ser totalmente carregada. por isso o window.onload como função
//  faço uma variável pra guardar o caminho do select que fiz no html, assim as modificações serão acrescentada dentro da tag select
// crio o ouvidor de eventos addEventListener pra quando mudar o select no caso change(evento de mudança), dar inicio a função e dentro da função é o que quero que aconteça
// o selectedOptions retoma um array em que esse array estará a lista de opções selecionadas, como só tenho como selecionar uma so opção de cor, ele sempre retornará 1 unico valor, por isso o [0]
// quero que mude o background do meu body e ele seja igual ao nome da cor que selecionar no meu select, por isso coloquei pra buscar o valor que está dentro da tag de cada option, esse valor é o nome da cor.

console.log('teste');

window.onload = function () {
    let select = document.querySelector('select');
    select.addEventListener('change', function () {
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value.
    })
}