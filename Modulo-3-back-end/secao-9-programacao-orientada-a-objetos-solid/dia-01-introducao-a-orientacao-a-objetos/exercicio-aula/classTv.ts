class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    console.log(`Creating tv ${brand}`);
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  sleep() {
    console.log(`${this._brand}: zzzzzzz`);
  }

  public get connectedTo():string | undefined {
    return this._connectedTo;
  }

  public set connectedTo(value:string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const Tv1 = new Tv('LG', 39, '1080px', ['HDMI', 'WI-FI']);
const Tv2 = new Tv('APPLE', 55, '1080px', ['HDMI', 'WI-FI', 'USB']);
Tv1.connectedTo = 'WI-FI';
console.log(Tv1.connectedTo);