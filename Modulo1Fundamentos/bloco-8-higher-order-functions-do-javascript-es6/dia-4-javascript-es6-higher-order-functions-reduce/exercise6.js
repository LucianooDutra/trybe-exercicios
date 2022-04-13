const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . 

function studentAverage() {
  // escreva seu código aqui
  const resultado = students.map((estudante, index) => ({
      name: estudante,
      average: (grades[index].reduce((acc, par2) => acc + par2, 0) / grades[index].length)
  }));
return resultado;
}
console.log(studentAverage());
