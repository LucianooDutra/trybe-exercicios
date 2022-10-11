class SuperClass {
  public isSuper: boolean = true;

constructor(isSuper: boolean) {
  this.isSuper = isSuper;
}

public sayHello ():string {
  console.log(`Olá mundo! ${this.isSuper}`);
  return 'Olá mundo!';
}

}

class Subclass extends SuperClass {
  public isSuper: boolean = false;
  public name: string;

  constructor(isSuper: boolean, name: string) {
    super(isSuper);
    this.isSuper = isSuper;
    this.name = name;
  }
}

const myFunc = (objeto:SuperClass) => {
  console.log(objeto.sayHello);
  if(objeto.isSuper === true) {
    console.log('Super!')
  } else {
    console.log('Sub!')
  }
}

const superClass1 = new SuperClass(false);
superClass1.sayHello();
myFunc(superClass1);

const subClass1 = new Subclass(true, 'luciano');
subClass1.sayHello();
console.log(subClass1.name);
myFunc(subClass1);