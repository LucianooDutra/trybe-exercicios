import Teacher from './classProfessor';
import Evaluation from './classEvaluation';

export default class Exam extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(teacher, score);
  }

  set score(value: number) {
    if (value > 25) {
      throw new Error('A pontução deve ser menor que 25 pontos.');
    }

    super.score = value;
  }
}