class Person {
  protected _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  public get name(): string{
    return this._name
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  };

  public get birthDate():Date {
    return this._birthDate
  }

  set birthDate(value:Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  };

  private validateName(value: string): void {
    if(value.length < 3) {
      throw new Error('Name deve conter no mín 3 caracteres')
    }
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  }

}

// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

// console.log(maria);
// console.log(luiza);


class Students extends Person{
  private _matricula: string;
  // protected _name: string;
  private _prova1: number;
  private _prova2: number;
  private _prova3: number;
  private _prova4: number;
  private _trabalho1: number;
  private _trabalho2: number;

  // roda automaticamente ao inicializar o arquivo.
  constructor(
    name: string,
    p1:number,
    p2:number,
    p3:number,
    p4:number,
    t1:number,
    t2:number,
    birthDate: Date
    ) {
    super(name, birthDate);
    console.log(`Creating person ${name}`);
    this._matricula = this.generateEnrollment();
    // this._name = name;
    this._prova1 = p1;
    this._prova2 = p2;
    this._prova3 = p3;
    this._prova4 = p4;
    this._trabalho1 = t1;
    this._trabalho2 = t2;
  }

  // métodos / funções
  public somaDasNotas() {
    console.log(`O somatorio das notas são: ${this.prova1 + this.prova2 + this.prova3 + this.prova4 + this.trabalho1 + this.trabalho2}`);
  }

  public mediaDasNotas() {
    console.log(`O média das notas são: ${(this.prova1 + this.prova2 + this.prova3 + this.prova4 + this.trabalho1 + this.trabalho2) / 6}`);
  }

  public get matricula():string {
    return this._matricula;
  }

  set matricula(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._matricula = value;
  }

  public get name():string {
    return this._name;
  }

  public get prova1():number {
    return this._prova1;
  }

  public get prova2():number {
    return this._prova2;
  }

  public get prova3():number {
    return this._prova3;
  }

  public get prova4():number {
    return this._prova4;
  }

  public get trabalho1():number {
    return this._trabalho1;
  }

  public get trabalho2():number {
    return this._trabalho2;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

}

// const student1 = new Students('luciano', 8, 7, 9.5, 6, 9, 8, new Date(Date.parse('Jun 07, 2012')));
// console.log(student1);
// student1.somaDasNotas();
// student1.mediaDasNotas();