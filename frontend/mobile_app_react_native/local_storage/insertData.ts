import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { tableName } from '../constants/local_storage';

interface dataItem {
    tag : String
}
const insertData = async (db: SQLiteDatabase, dataItems: dataItem) => {
    const insertQuery =
      `INSERT OR REPLACE INTO ${tableName}(value) values ${dataItems.tag});` 
    return db.executeSql(insertQuery);
};

export default insertData;