// Item 1

const fatorial = (numero) => {
    let resultado = 1;
    for (let i = 1; i <= numero; i += 1) {
resultado *= i;
    }
    return resultado
}

// console.log(fatorial(4));

// item 2

const maiorPalavra = (frase) => {
    let palavras = frase.split(' '); // .split ele separa as palavras dentro de um array, e retorna um novo array onde cada palavra será uma string separada
    let maiorPalavra = 0;
    let resultado = '';

    for (const word of palavras) {
        if (word.length > maiorPalavra) {
            resultado = word;
        }
    }

    return resultado;
}

// console.log(maiorPalavra("Antonio foi no banheiro e não sabemos o que aconteceu"));
