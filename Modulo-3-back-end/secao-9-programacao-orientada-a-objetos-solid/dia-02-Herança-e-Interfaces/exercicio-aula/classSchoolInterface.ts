interface Person {
  name: string;
  info(): string;
}

class Student implements Person {
  public name: string;
  public school: string;

  constructor(name: string, school: string) {
    this.name = name;
    this.school = school;
  }

  public info():string {
    return `${this.name} estuda no colegio ${this.school}`
  }
}

class Professor implements Person {
  public name: string;
  public school: string;
  public subject: string;

  constructor(name: string, school: string, subject: string) {
    this.name = name;
    this.school = school;
    this.subject = subject;
  }

  public info():string {
    return `${this.name} leciona ${this.subject} no colegio ${this.school}`
  }
}


const printInfo = (person: Person) => {
  console.log(person.info());
};


const student1 = new Student('luciano', 'trybe');
console.log(student1);
printInfo(student1);

const professor1 = new Professor('Mariotto', 'trybe', 'BackEndo');
console.log(professor1);
printInfo(professor1);