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

    return db.executeSql(insertQuery);
}

const insertTag = async (
    db: SQLiteDatabase, tags: String[], cardID ) => {

    const  values =  tags.reduce(
        (previous, current) => previous + "," + `('${current}', ${cardID}) \n`,
        "").substring(1)
    
        const insertQuery = 
        `INSERT OR REPLACE INTO ${tagsTable.tableName}
        (${tagsTable.tag}, ${tagsTable.card})
        values
        ${values};
        `;
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
    } catch (error) {
       console.error(error) 
    }
     
};

export default insertCard;
