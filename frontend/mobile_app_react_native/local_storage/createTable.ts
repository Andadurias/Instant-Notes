import {SQLiteDatabase} from 'react-native-sqlite-storage';

const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS Test(
        value TEXT NOT NULL
    );`;

  await db.executeSql(query);
};

export default createTable;