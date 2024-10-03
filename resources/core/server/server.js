import * as alt from 'alt-server';
import { connectToDatabase } from './database/connection.js';
alt.on('resourceStart', async () => {
    try {
        const db = await connectToDatabase();
        await db.query('SELECT 1');
        alt.log('[MySQL] База данных подключена.');
    }
    catch (error) {
        alt.logError('[MySQL] Ошибка при подключении к базе данных в resourceStart:', error);
        return;
    }
});
