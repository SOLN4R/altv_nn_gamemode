import * as alt from "alt-server";
import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';

const connectionConfig: ConnectionOptions = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'altv_nn_gamemode'
};

let connection: Connection;

export async function connectToDatabase(): Promise<Connection> {
  if (!connection) {
    try {
      connection = await mysql.createConnection(connectionConfig);
    } catch (err) {
      alt.logError('[MySQL] Неудачное соединение с базой данных:', err);
      throw err;
    }
  }
  return connection;
}