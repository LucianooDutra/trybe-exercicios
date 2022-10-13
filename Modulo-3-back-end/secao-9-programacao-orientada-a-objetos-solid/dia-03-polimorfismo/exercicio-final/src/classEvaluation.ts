import Teacher from './classProfessor';

export default class Evaluation {
  private _teacher: Teacher;

  constructor(teacher: Teacher, private _score: number) {
    this._teacher = teacher;
    // this.type = _type;
    this.score = _score;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');

    this._score = value;
  }

  // get type(): string {
  //   return this._type;
  // }

  // set type(value: string) {
  //   if (!['prova', 'trabalho'].includes(value)) {
  //     throw new Error('O tipo de avaliação não é válido.');
  //   }

  //   this._type = value;
  // }
}