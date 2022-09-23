import {SQLiteDatabase} from 'react-native-sqlite-storage';
import { cardTable, tableName, tagsTable, userInformationTable } from './design';
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
        ${cardTable.content} ${cardTable.contentType},
        ${cardTable.creationTime} ${cardTable.creationTimeType}
    );`
    const cardTableCreation2 = 
    `CREATE TABLE IF NOT EXISTS Cards(
      cardID INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      creationTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  );
    `;
  return  db.executeSql(cardTableCreation2);
}
/**
 * Create tags table
 * Need to be done after the creation os the cards table due to the foreign key
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
    const tagCreation2 = 
    `CREATE TABLE IF NOT EXISTS Tags(
      tag text NOT NULL,
      cardID INTEGER NOT NULL,
      FOREIGN KEY (cardID) REFERENCES Cards(cardID),
      PRIMARY KEY(tag, cardID)
  );
    `;
    return db.executeSql(tagCreation2);
}

const showTables = async (db) => {
  const query = 
  `SELECT 
  name
  FROM 
    sqlite_schema
  WHERE 
    type ='table' AND 
    name NOT LIKE 'sqlite_%';`
    return db.executeSql(query)
}

const createTables = async (db: SQLiteDatabase) => {
  // drop tables
  // discommend 
  // dropTables(db);
    try {
      await createUserInformationTable(db);
      await createCardsTable(db);
      await createTagsTable(db);

      const results = await showTables(db);
      console.log("The tables are: ")
      results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          const row  = result.rows.item(index)
          console.log(row);
        }
    });
    } catch (error) {
      console.error(error)
    }
};

export default createTables;