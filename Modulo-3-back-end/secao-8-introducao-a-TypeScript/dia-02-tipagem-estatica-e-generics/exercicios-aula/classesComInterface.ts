// Crie uma interface cujo objeto represente um Automóvel.

interface Car {
  dataFabricacao: Date;
  modelo: string;
  marca: string;
  configuracao(nome: string):void;
};

class Car {
  constructor(dataFabricacao:Date, modelo: string, marca: string) {
    this.dataFabricacao = dataFabricacao;
    this.modelo  = modelo;
    this.marca  = marca;
  }

  configuracao(nome: string) {
      console.log(`Marca ${this.marca} name ${nome}.`);
  }
}

const car1 = new Car(new Date("2022-10-03"), "Corcel", "Ford");
console.log(car1);
car1.configuracao("fusca");


// Crie uma interface cujo objeto represente um Felino.

interface Felino {
  nome: string;
  especie: string;
  habitat: string;
};

class Felino {
  constructor(nome: string, especie: string, habitat: string) {
    this.nome  = nome;
    this.especie  = especie;
    this.habitat = habitat;
  }
}

const felino1 = new Felino("leão", "felino", "Africa");
console.log(felino1);


// Crie uma interface cujo objeto represente uma Aeronave.

interface Aeronave {
  nome: string;
  tipo: string;
  tamanho: string | number;
};

class Aeronave {
  constructor(nome: string, tipo: string, tamanho: string | number) {
    this.nome  = nome;
    this.tipo  = tipo;
    this.tamanho = tamanho;
  }
}

const aeronave1 = new Aeronave("Cortador de ventos", "foguete", 250);
console.log(aeronave1);
