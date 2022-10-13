export default class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}

const math = new Subject('Matematica');
const story = new Subject('Historia');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(story);
console.log(philosophy);