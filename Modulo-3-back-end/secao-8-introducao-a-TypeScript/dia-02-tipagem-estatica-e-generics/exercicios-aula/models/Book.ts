import connection from "./connection";
import { Pool, RowDataPacket, ResultSetHeader } from "mysql2/promise";

export interface Book {
  id?: number,
  title: string,
  price: number,
  author: string,
  isbn: string,
}

export default class BookModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const result = await this.connection.execute<(Book & RowDataPacket)[]>('SELECT * FROM books');
    const [rows] = result;
    return rows;
    // utilizando Generics nós conseguimos realizar a tipagem de maneira antecipada. Na mesma linha onde chamamos o execute já é possível saber todas as propriedades da variável rows
    // informar a qualquer função que utilizar o getAll que o resultado que será obtido no retorno será um array com a estrutura da interface Books.
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
        'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
        [title, price, author, isbn]
    );

    return { id: insertId, ...book };
  }
}