"use strict";
// Crie uma classe cujo objeto represente uma Pessoa.
// usamos a palavra reservada class para definir uma classe
class Person {
    // aprenderemos mais sobre o construtor na próxima seção
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(name, birthDate, age) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);
console.log(person1);
person1.speak();
// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "age": undefined
// }
// "Jane Doe está falando."
person1.age = 23;
console.log(person1);
// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "age": 23
// }
console.log(person2);
person2.walk();
// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "age": 42
// }
// "Jon Doe está andando."
// Crie uma classe cujo objeto represente um Cachorro.
class Dog {
    constructor(name, birthDate, age) {
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
const dog1 = new Dog("Batata", new Date("2014-03-08"), 8);
console.log(dog1);
console.log(dog1.name);
// Crie uma classe cujo objeto represente uma Casa.
class House {
    constructor(rua, metragem) {
        this.rua = rua;
        this.metragem = metragem;
    }
}
const house1 = new House("rua: sebastiana", 184.25);
console.log(house1);
console.log(house1.rua);
// Crie uma classe cujo objeto represente um Voo.
class Voo {
    constructor(dia, cidadeSaida, cidadeDestino, numeroPessoas) {
        this.dia = dia;
        this.cidadeSaida = cidadeSaida;
        this.cidadeDestino = cidadeDestino;
        this.numeroPessoas = numeroPessoas;
    }
    decolou() {
        console.log(`Voo com destino ${this.cidadeDestino} está decolando.`);
    }
    pousou() {
        console.log(`Voo com saida de ${this.cidadeSaida} está pousando.`);
    }
}
const voo1 = new Voo(new Date("2022-10-03"), "Rio de Janeiro", "Lisboa", 185);
console.log(voo1);
console.log(voo1.cidadeSaida);
