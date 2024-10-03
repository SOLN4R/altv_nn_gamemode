import * as alt from "alt-server";
import mysql from 'mysql2/promise';
const connectionConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'altv_nn_gamemode'
};
let connection;
export async function connectToDatabase() {
    if (!connection) {
        try {
            connection = await mysql.createConnection(connectionConfig);
        }
        catch (err) {
            alt.logError('[MySQL] Неудачное соединение с базой данных:', err);
            throw err;
        }
    }
    return connection;
}
