

import mysql, { Connection, Pool, Query, QueryOptions, MysqlError, PoolConnection } from 'mysql';


export default class MySQL {
  private static pool: Pool;

  constructor() {
    console.log("setting up databse connection ppol");
    if (!MySQL.pool) {
      console.log("Connecting to mysql databse");
      MySQL.pool  = mysql.createPool({
        connectionLimit : 10,
        host            : process.env.DB_HOST,
        user            : process.env.DB_USER,
        password        : process.env.DB_PASS,
        database        : process.env.DB_NAME
      });

      MySQL.pool.on('connection', (connection: Connection) => {
        console.log('Pool configured');
      });

      MySQL.pool.on('acquire', (connection: Connection) => {
        console.log('Connection %d acquired', connection.threadId);
      });

      MySQL.pool.on('error', (connection: Connection) => {
        console.log('Error connecting to database', connection.threadId);
      });
    }
  }

  static getPool() {
    return MySQL.pool;
  }
}
