import {SQLiteDatabase} from 'react-native-sqlite-storage';
import { cardTable, tableName, tagsTable, userInformationTable } from './design';

const dropTables = async (db: SQLiteDatabase) => {
    const dropQuery =
    `DROP TABLE IF EXISTS ${tagsTable.tableName};
    DROP TABLE IF EXISTS ${cardTable.tableName};
    ` ;
    return db.executeSql(dropQuery);
}

export default dropTables;