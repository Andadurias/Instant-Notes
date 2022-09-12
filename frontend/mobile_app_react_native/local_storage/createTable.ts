import {SQLiteDatabase} from 'react-native-sqlite-storage';
import { cardTable, tableName, tagsTable, userInformationTable } from '../constants/local_storage';

const createTables = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        value TEXT NOT NULL
    );`;

  // User information table
  const userInformationCreation = 
  `CREATE TABLE IF NOT EXISTS ${userInformationTable.tableName}(
    ${userInformationTable.id} ${userInformationTable.idType},
    ${userInformationTable.userName} ${userInformationTable.userNameType},
    ${userInformationTable.mail} ${userInformationTable.mailType},
    ${userInformationTable.password} ${userInformationTable.passwordType}
);`
  await db.executeSql(userInformationCreation);

  // Tag table 
  const tagCreation = 
    `CREATE TABLE IF NOT EXISTS ${tagsTable.tableName}(
        ${tagsTable.tag} ${tagsTable.tagType },
        ${tagsTable.card} ${tagsTable.cardTye},
        ${tagsTable.options}
    );`
    await db.executeSql(tagCreation);

  // card table
  const cardTableCreation = 
  `CREATE TABLE IF NOT EXISTS ${cardTable.tableName}(
      ${cardTable.id} ${cardTable.idType},
      ${cardTable.content} ${cardTable.contentType}
  );`
  await db.executeSql(cardTableCreation);
};

export default createTables;