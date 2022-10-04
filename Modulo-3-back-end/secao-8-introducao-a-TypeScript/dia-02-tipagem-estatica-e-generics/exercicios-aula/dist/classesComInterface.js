"use strict";
// Crie uma interface cujo objeto represente um Automóvel.
;
class Car {
    constructor(dataFabricacao, modelo, marca) {
        this.dataFabricacao = dataFabricacao;
        this.modelo = modelo;
        this.marca = marca;
    }
    configuracao(nome) {
        console.log(`Marca ${this.marca} name ${nome}.`);
    }
}
const car1 = new Car(new Date("2022-10-03"), "Corcel", "Ford");
console.log(car1);
car1.configuracao("fusca");
;
class Felino {
    constructor(nome, especie, habitat) {
        this.nome = nome;
        this.especie = especie;
        this.habitat = habitat;
    }
}
const felino1 = new Felino("leão", "felino", "Africa");
console.log(felino1);
;
class Aeronave {
    constructor(nome, tipo, tamanho) {
        this.nome = nome;
        this.tipo = tipo;
        this.tamanho = tamanho;
    }
}
const aeronave1 = new Aeronave("Cortador de ventos", "foguete", 250);
console.log(aeronave1);
