import mysql, { Pool } from 'mysql2/promise';

class Connection {
  private static connection: Pool;

  constructor() {
    Connection.connection = mysql.createPool({
      // 'localhost'
      // host: 'mysqldb',      Nome do meu BD se estiver usando docker
      host: 'localhost',
      // se não usar docker e rodar na minha propria maquina será localhost
      user: 'root',
      password: 'password',
      // nome do BD
      database: 'solid_example',
    });
  }

  public async execute(sql: string, values: unknown) {
    const result = await Connection.connection.execute(sql, values);
    return result;
  }
}
// Open/Closed
export default new Connection();