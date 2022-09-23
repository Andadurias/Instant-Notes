// NOT TESTED
import {SQLiteDatabase } from 'react-native-sqlite-storage';
import { cardTable, tagsTable} from '.././design';

/**
 * insert content in Cards table
 * @param db 
 * @param dataItem 
 * @returns 
 */
const insertContent = async (db: SQLiteDatabase, content : String ) => {
    const insertQuery =
    `INSERT OR REPLACE INTO ${cardTable.tableName} 
        (${cardTable.content})
        values 
       ('${content}');` ;
    console.log(insertQuery)
    return db.executeSql(insertQuery);

}
// TODO IN ARRAY TAG AND STRING
const insertTag = async (
    db: SQLiteDatabase, tags: String[], cardID  ) => {

    const  values =  tags.reduce(
        (previous, current) => previous + "," + `('${current}', ${cardID}) \n`,
        "").substring(1)
    
        const insertQuery = 
        `INSERT OR REPLACE INTO ${tagsTable.tableName}
        (${tagsTable.tag}, ${tagsTable.card})
        values
        ${values};
        `;
    console.log(insertQuery )
    
    return db.executeSql(insertQuery)
    
};

interface cardData {
    content : String,
    tags : String[]
}
const insertCard = async (db: SQLiteDatabase, card : cardData ) => {  
    try {
        const cardInsertion = await insertContent(db, card.content);
        const insert = await insertTag(db, card.tags, cardInsertion[0].insertId)
        console.log('Insertion') 
        console.log(insert)
        console.log("-- remove Tags table--- ")
    const results2 = await db.executeSql(
      `
      SELECT * FROM Tags;
      `
      );
          results2.forEach(result => {
          for (let index = 0; index < result.rows.length; index++) {
            const row  = result.rows.item(index)
            console.log(row)
          }
      });
      console.log("--- remove Tags table end ---")
      const results3 = await db.executeSql(
        //`SELECT cardID, content, creationTime FROM Cards; 
        `SELECT * FROM Cards;
        `);
            results3.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
              const row  = result.rows.item(index)
              console.log(row)
            }
        });
        console.log("--- remove Cards table end ---")
    } catch (error) {
       console.error(error) 
    }
     
};

export default insertCard;
