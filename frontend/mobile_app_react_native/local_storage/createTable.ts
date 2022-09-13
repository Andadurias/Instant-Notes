import {SQLiteDatabase} from 'react-native-sqlite-storage';
import { cardTable, tableName, tagsTable, userInformationTable } from '../constants/local_storage';
import dropTables from './dropTables';
/**
 * Create user information table 
 * @param db 
 * @returns 
 */
const createUserInformationTable = async (db: SQLiteDatabase) => {
  // User information table
  const userInformationCreation = 
  `CREATE TABLE IF NOT EXISTS ${userInformationTable.tableName}(
    ${userInformationTable.id} ${userInformationTable.idType},
    ${userInformationTable.userName} ${userInformationTable.userNameType},
    ${userInformationTable.mail} ${userInformationTable.mailType},
    ${userInformationTable.password} ${userInformationTable.passwordType}
  );`
 return  db.executeSql(userInformationCreation);
}
/**
 * 
 * @param db Create cards table if not exists
 * @returns 
 */
const createCardsTable = async (db: SQLiteDatabase) => {
  const cardTableCreation = 
    `CREATE TABLE IF NOT EXISTS ${cardTable.tableName}(
        ${cardTable.id} ${cardTable.idType},
        ${cardTable.content} ${cardTable.contentType}
    );`
  return  db.executeSql(cardTableCreation);
}
/**
 * Create tags table
 * Need to be done after the creation os the cards table due to the foreing key
 * @param db 
 * @returns 
 */
const createTagsTable = async (db: SQLiteDatabase) => {
  const tagCreation = 
    `CREATE TABLE IF NOT EXISTS ${tagsTable.tableName}(
        ${tagsTable.tag} ${tagsTable.tagType },
        ${tagsTable.card} ${tagsTable.cardTye},
        ${tagsTable.options}
    );`
    return db.executeSql(tagCreation);
}

const createTables = async (db: SQLiteDatabase) => {
  // drop tables
  // discommend 
  dropTables(db);
    try {
      await createUserInformationTable(db);
      await createCardsTable(db);
      await createTagsTable(db);
    } catch (error) {
      console.error(error)
    }
};

export default createTables;