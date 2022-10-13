import Person from './classPerson';
import Enrollable from './interfaceEnrollable';
import EvaluationResult from './classEvaluationResult';

export default class Students extends Person implements Enrollable{
  private _matricula = String();
  private _evaluationsResults: EvaluationResult[];

  // roda automaticamente ao inicializar o arquivo.
  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    console.log(`Creating student ${name}`);
    this._matricula = this.generateEnrollment();
    this._evaluationsResults = [];
  }

  // métodos / funções
  get enrollment(): string {
    return this._matricula;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }
    this._matricula = value;
  }

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults;
  }

  sumGrades(): number {
    return [...this._evaluationsResults]
      .reduce((previousNote, note) => note.score + previousNote, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this._evaluationsResults.length;

    return Math.round(sumGrades / divider);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResults.push(value);
  }

}

const carolina = new Students('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Students('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
// console.log(carolina.addEvaluationResult('capim', 7));
console.log(lucas);