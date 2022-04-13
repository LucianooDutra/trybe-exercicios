const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
//   5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

  function containsA() {
    // escreva seu código aqui
    return names.reduce((acc, par2) => acc + par2.split('').reduce((acc2, par3) => par3 === 'a' || par3 === 'A' ? acc2 += 1 : acc2, 0), 0);
  }
  console.log(containsA());