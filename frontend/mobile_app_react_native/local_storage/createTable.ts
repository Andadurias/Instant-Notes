import {SQLiteDatabase} from 'react-native-sqlite-storage';
import { tableName } from '../constants/local_storage';

const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        value TEXT NOT NULL
    );`;

  await db.executeSql(query);
};
// TODO we need to adapt the port names

export default createTable;