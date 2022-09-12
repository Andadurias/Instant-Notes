import {SQLiteDatabase} from 'react-native-sqlite-storage';
import { tableName, userInformationTable } from '../constants/local_storage';

const createTables = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        value TEXT NOT NULL
    );`;

  // User information table
  const userInformationQuery = 
  `CREATE TABLE IF NOT EXISTS ${userInformationTable.tableName}(
    ${userInformationTable.id} ${userInformationTable.idType},
    ${userInformationTable.userName} ${userInformationTable.userNameType},
    ${userInformationTable.mail} ${userInformationTable.mailType},
    ${userInformationTable.password} ${userInformationTable.passwordType}
);`
  console.log(userInformationQuery)
  await db.executeSql(userInformationQuery);
};

export default createTables;