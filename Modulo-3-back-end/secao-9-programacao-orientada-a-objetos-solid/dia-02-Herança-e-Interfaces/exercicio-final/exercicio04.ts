import Subject from './exercicio03';

interface Employee {
  _registration: string;
  _salary: number;
  _admissionDate: Date;

  generateRegistration(): string;
}

class Person2 {
  private _name: string;
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
    if (Person2.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  }

}

class Professor extends Person2 implements Employee {
  private _subject: Subject;
  _registration: string;
  _salary: number;
  _admissionDate: Date;


  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._subject = subject;
    this._registration = this.generateRegistration();
    this._salary = salary;
    this._admissionDate  = new Date();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

    this._registration = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  }
}

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Professor('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Professor('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Professor('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);