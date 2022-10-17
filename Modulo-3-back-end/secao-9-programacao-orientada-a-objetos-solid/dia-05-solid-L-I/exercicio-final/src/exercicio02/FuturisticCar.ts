import { IFutursticCar } from './interfaces';

export default class FuturisticCar implements IFutursticCar {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}