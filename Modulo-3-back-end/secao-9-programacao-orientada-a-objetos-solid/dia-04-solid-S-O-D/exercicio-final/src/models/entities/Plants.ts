import IPlant from './IPlants';

export default class Plant implements IPlant {
  public readonly id: number;
  public name: string;
  public specie: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.specie = '';
  }
}