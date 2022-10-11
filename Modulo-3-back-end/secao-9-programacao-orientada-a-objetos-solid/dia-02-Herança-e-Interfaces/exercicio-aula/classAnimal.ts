class Animal {
    public name: string;
    protected birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  get age() {
    /*Para operar com datas, vamos operar somente com milissegundos. Uma data
    é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );
    /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
    Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  static funcaoseminstanciar () {
    console.log('nessa funcao não necessita chamar somento apos chamar o objeto.')
  }
}

const animal1 = new Animal('batata', new Date(Date.parse('May 05, 2017')));
console.log(animal1.age);

// classe Mammal herda a classe pai Animal
class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(tiger);
tiger.walk();


class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`);
    console.log(`${this.birthDate} está voando!`);
  }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2012')),
);

console.log(parrot.age);
parrot.fly();

Animal.funcaoseminstanciar();