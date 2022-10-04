interface Car {
  brand: string;
  color: string;
  doors: number;
};

class Car {
  constructor(brand:string, color: string, doors: number) {
    this.brand = brand;
    this.color  = color;
    this.doors  = doors;
  }

  honk():void {
      console.log(`Buzina acionada`);
  }
  turnOn():void {
    console.log(`Carro ligado`);
  }
  turnOff():void {
    console.log(`Carro desligado`);
  }
  speedUp():void {
    console.log(`Aumenta velocidade`);
  }
  speedDown():void {
    console.log(`Diminui velocidade`);
  }
  stop():void {
    console.log(`Carro parado`);
  }
  turn(direcao: string):void {
    console.log(`Carro virando a ${direcao}`);
  }
  openTheDoor():void {
    console.log(`Abriu a porta`);
  }
  closeTheDoor():void {
    console.log(`Fechou a porta`);
  }
}

const car1 = new Car("Ford", "Grafite", 5);
console.log(car1);
car1.honk();
car1.turnOn();
car1.turnOff();
car1.speedUp();
car1.speedDown();
car1.stop();
car1.turn("direita");

const car2 = new Car("Volkswagen", "prata", 4);

car2.openTheDoor();
car2.closeTheDoor();
car2.turnOn();
car2.speedUp();
car2.speedDown();
car2.turn("esquerda");
car2.speedUp();
car2.speedDown();
car2.turn("direita");
car2.speedUp();
car2.speedDown();
car2.turn("direita");
car2.speedDown();
car2.stop();
car2.speedUp();
car2.speedDown();
car2.turn("direita");
car2.speedUp();
car2.speedDown();
car2.turn("esquerda");
car2.speedUp();
car2.speedDown();
car2.turn("direita");
car2.speedDown();
car2.stop();
car2.speedUp();