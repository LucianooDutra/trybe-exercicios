import Teacher from './classProfessor';
import Evaluation from './classEvaluation';

export default class Work extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(teacher, score);
  }

  set score(value: number) {
    if (value > 50) throw new Error('A pontução deve ser menor que 50 pontos.');

    super.score = value;
  }
}