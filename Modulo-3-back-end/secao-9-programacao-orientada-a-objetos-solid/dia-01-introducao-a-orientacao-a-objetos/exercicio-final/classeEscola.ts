class Students {
  // atributos
  private _matricula: number;
  private _name: string;
  private _prova1: number;
  private _prova2: number;
  private _prova3: number;
  private _prova4: number;
  private _trabalho1: number;
  private _trabalho2: number;

  // roda automaticamente ao inicializar o arquivo.
  constructor(
    m:number,
    n: string,
    p1:number,
    p2:number,
    p3:number,
    p4:number,
    t1:number,
    t2:number,
    ) {
    console.log(`Creating person ${n}`);
    this._matricula = m;
    this._name = n;
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

  public get matricula() {
    return this._matricula;
  }

  public get name() {
    return this._name;
  }

  public get prova1() {
    return this._prova1;
  }

  public get prova2() {
    return this._prova2;
  }

  public get prova3() {
    return this._prova3;
  }

  public get prova4() {
    return this._prova4;
  }

  public get trabalho1() {
    return this._trabalho1;
  }

  public get trabalho2() {
    return this._trabalho2;
  }

}

const student1 = new Students(11, 'luciano', 8, 7, 9.5, 6, 9, 8);
student1.somaDasNotas();
student1.mediaDasNotas();