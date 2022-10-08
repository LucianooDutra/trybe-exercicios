class Person {
  // atributos
  protected _name: string;
  private _age: number;
  readonly height: number;
  public weight: number;

  // roda automaticamente ao inicializar o arquivo.
  constructor(n: string, a: number, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this._name = n;
    this._age = a;
    this.height = h;
    this.weight = w;
  }

  // métodos / funções
  public sleep() {
    console.log(`${this.name}: zzzzzzz`);
    this.getUp();
  }

  private getUp() {
    console.log(`${this.name}: Up!!`);
  }

  // esta sintaxe permite acessar o valor retornado via person.getWeight()
  public get name() {
    return this._name;
  }

  // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  public get age() {
    return this._age;
  }

  // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
  // mesmo que esteja ocorrendo uma validação internamente
  // poder do ecapsulamento
  public set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  public birthday() {
    this._age += 1;
  }
}

// classe que herda outra classe
class PersonNew extends Person {

  public metodoQualquer() {
    console.log(this._name);
  };
}

// objetos
const p1 = new Person('Maria', 22, 171, 58);
const p2 = new Person('João', 29, 175, 66);
console.log(p1.height, p1.weight);
console.log(p2.height, p2.weight);
p1.sleep();
p2.sleep();
console.log(p1.age);
p1.age = 25;  // chama aut. o método set age()
console.log(p1.age);
console.log(p1.birthday());
console.log(p1.age);
console.log(p1.height);

const p3 = new PersonNew('Marcus', 44, 180, 44)
p3.sleep();
p3.metodoQualquer();
