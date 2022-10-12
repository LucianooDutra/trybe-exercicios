class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
  sleep() { console.log(`${this.name} está dormindo.`); }
}

class Bird extends Animal {
  move() {
    super.move();
    console.log(`${this.name} está voando.`); 
  }
  sleep() {
    console.log(`${this.name} está dormindo.`);
  }
}

class Mammal extends Animal {
  move() {
    super.sleep();
    console.log(`${this.name} está andando.`);
  }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

console.log(b.sleep);

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);

const mySleep = (animal: Animal) => {
  animal.sleep();
}
mySleep(a);
mySleep(b);
mySleep(m);

/*
Saída:
Tubarão está se movendo.
Papagaio está voando.
Tatu está andando.
*/

// classe com abstract
abstract class Animal2 {
  constructor(public name: string) { }
  // método abstrato jump. não pode ser inicializado
  abstract jump(): void
}

class Fish extends Animal2 {
  jump() { console.log(`${this.name} está saltando.`); }
}

const myMove2 = (animal: Animal2) => {
  animal.jump();
}

const d = new Fish('golfinho');

myMove2(d);