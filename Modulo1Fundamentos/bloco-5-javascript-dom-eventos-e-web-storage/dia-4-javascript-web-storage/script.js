
// primeiro irei fazer todo o meu código js, após a paguina ser totalmente carregada. por isso o window.onload como função
//  faço uma variável pra guardar o caminho do select que fiz no html, assim as modificações serão acrescentada dentro desta variável
// crio o ouvidor de eventos addEventListener pra quando mudar o select no caso change(evento de mudança), dar inicio a função e dentro da função é o que quero que aconteça
// o selectedOptions retoma um array em que esse array estará a lista de opções selecionadas, como só tenho como selecionar uma so opção de cor, ele sempre retornará 1 unico valor, por isso o [0]
// quero que mude o background do meu body e ele seja igual ao nome da cor que selecionar no meu select, por isso coloquei pra buscar o valor que está dentro da tag de cada option, esse valor é o nome da cor.
// por ultimo fiz um localStorage.setItem pra salvar as modificações feitas no meu browser

window.onload = function () {
    let select = document.querySelector(".colorBackground");
    select.addEventListener('change', function () {
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value

        localStorage.setItem('5.4-background-color', selected.value);
    })

    // faço o mesmo passo a passo da escolha do background, só mudei porque quero modificar a color
    let corTexto = document.querySelector('.colorFont');
    corTexto.addEventListener('change', function () {
        let valorCOr = corTexto.selectedOptions[0];
        document.body.style.color = valorCOr.value

        localStorage.setItem('5.4-color', valorCOr.value);
    })

    // mesmo passo a passo do primeiro, só mudo porque quero mudar a fontFamily
    let fonteText = document.querySelector('.fontFamily');
    fonteText.addEventListener('change', function () {
        let valorFonte = fonteText.selectedOptions[0];
        document.body.style.fontFamily = valorFonte.value

        localStorage.setItem('5.4-fontFamily', valorFonte.value);
    })


    //Criei meu input e fiz minha variável pra guardar o caminho do meu input
    // Adiciono o escutador de eventos com o change, que vai ativar a função toda vez que o valor mudar
    // coloco dentro da função tudo aquilo que quero que aconteça 
    // quero que todas as minhas tag p mude seu style.fontSize pra o valor que vai ser pego dentro da variavel inputFontSize
    // só que pra pegar o meu valor com a unidade px, tenho que fazer ele dentro de duas crases ex. `${VALOR AQUI DENTRO}px`;

    let inputFontSize = document.querySelector('input[name="font-size"]');
    inputFontSize.addEventListener('change', function () {
        document.querySelector('p').style.fontSize = `${inputFontSize.value}px`;

        localStorage.setItem('5.4-font-size', `${inputFontSize.value}px`);
    })

    // Mesmo passo a passo que o anterior
    let inputLineHeight = document.querySelector('input[name="line-height"]');
    inputLineHeight.addEventListener('change', function () {
        document.querySelector('p').style.lineHeight = `${inputLineHeight.value}px`;

        localStorage.setItem('5.4-lineHeight', `${inputLineHeight.value}px`);
    })


    // recuperar o meu localStorage.getItem toda vez que a paguina inicar
    // e digo que a mudança que fiz encima será igual a que modifiquei no meu localStorage, assim toda vez que a pag for inicada ele irá direto pra esse espaço pra retomar todas as modificações que ficou salvo no localStorage
    // faço os mesmos passos pra cada uma modificação salva no localStorage
    let saveBackground = localStorage.getItem('5.4-background-color');
    document.body.style.backgroundColor = saveBackground;

    let saveColor = localStorage.getItem('5.4-color');
    document.body.style.color = saveColor;

    let saveFonte = localStorage.getItem('5.4-fontFamily');
    document.body.style.fontFamily = saveFonte;

    let saveFonteSize = localStorage.getItem('5.4-font-size');
    document.querySelector('p').style.fontSize = saveFonteSize;

    let saveLineHeight = localStorage.getItem('5.4-lineHeight');
    document.querySelector('p').style.lineHeight = saveLineHeight;


}