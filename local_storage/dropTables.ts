import {SQLiteDatabase} from 'react-native-sqlite-storage';
import { cardTable,  tagsTable, userInformationTable } from './design';

const drop =  async (name: String, db: SQLiteDatabase) => {
    const dropQuery =
    `DROP TABLE IF EXISTS ${name};
    ` ;
    return db.executeSql(dropQuery);
}

const dropTables = async (db: SQLiteDatabase) => {
    try{
        await drop(userInformationTable.tableName, db);
        await drop(tagsTable.tableName, db);
        await drop(cardTable.tableName, db);
        } catch(e){
            console.error(e)
        }
}

export default dropTables;