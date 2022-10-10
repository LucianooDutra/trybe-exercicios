class Client {
  protected _name: string;

  constructor(
    name: string,
    ) {
    console.log(`Creating person ${name}`);
    this._name = name;
  }

  public get name():string {
    return this._name;
  }

  public set name(value: string) {
    if(value.length < 3 ){
      throw new Error('O nome deve conter mais de 2 caracteres.');
    }
    this._name = value;
  }

}

const client1 = new Client('luciano');


class ItemPedido {
  private _item: string;
  private _price: number;

  constructor(
    item: string,
    price: number,
    ) {
    console.log(`Creating person ${item}`);
    this._item = item;
    this._price = price;
  }

  public get item():string {
    return this._item;
  }

  public set item(value: string) {
    if(value.length < 3 ) {
      throw new Error('O nome deve conter mais de 2 caracteres.');
    }
    this._item = value;
  }

  public get price():number {
    return this._price;
  }

  public set price(value: number) {
    if(value < 0) {
      throw new Error('O preço deve ser positivo.');
    }
    this._price = value;
  }

}

class Pedido {
  protected _client: Client;
  private _items: ItemPedido[] = [];
  private _pagamento: string;
  private _desconto = 0;

  constructor(
    client: Client,
    items:ItemPedido[],
    pagamento:string,
    desconto:number,
    ) {
    console.log(`Creating person ${client}`);
    this._client = client;
    this._items = items;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  public get client():Client {
    return this._client;
  }

  public set client(value: Client) {
    this._client = value;
  }

  public get items():ItemPedido[] {
    return this._items;
  }

  public set items(value:ItemPedido[]) {
    if(value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._items = value;
  }

  public get pagamento():string {
    return this._pagamento;
  }

  public set pagamento(value: string) {
    this._pagamento = value;
  }

  public get desconto():number {
    return this._desconto;
  }

  public set desconto(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._desconto = value;
  }

  calculateTotal(): number {
    return this.items
      .reduce((previousValue, item) => {
        const total = previousValue + item.price;

        return total;
      }, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.desconto);
  }

}

const client2 = new Client('luciano');
console.log(client2.name);

const itemPedido1 = new ItemPedido('banana', 10);

const pedido1 = new Pedido(client2, [itemPedido1], 'dinheiro', 0.10);

console.log(pedido1);

console.log('Valor normal: ', pedido1.calculateTotal());
console.log('Valor com desconto: ', pedido1.calculateTotalWithDiscount());