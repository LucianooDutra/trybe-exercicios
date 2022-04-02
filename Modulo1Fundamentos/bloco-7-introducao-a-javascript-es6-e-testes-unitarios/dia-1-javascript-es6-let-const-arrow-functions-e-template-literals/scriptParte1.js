// Item 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(`${elseScope}`);
  }
};

// testingScope(false);

// Item 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordemCrescente = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
};

let result = ordemCrescente();

// console.log(`Os números ${result} se encontram ordenados de forma crescente!`);

// Item 2 com sort

const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);

console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);

// Única linha
console.log(
  `Os números ${oddsAndEvens.sort(
    (a, b) => a - b
  )} se encontram ordenados de forma crescente !`
);
