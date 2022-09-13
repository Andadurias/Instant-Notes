// NOT TESTED
import {SQLiteDatabase } from 'react-native-sqlite-storage';
import { cardTable, tagsTable} from '../../constants/local_storage';

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
const insertTag = async (db: SQLiteDatabase, tag : String, cardID : String ) => {
    
};

interface cardData {
    content : String,
    tags : String[]
}
// TODO CREATE CARD ID WITH DATE AND 
const insertCard = async (db: SQLiteDatabase, card : cardData ) => {  
    try {
        const cardInsertion = await insertContent(db, card.content)
        console.log(cardInsertion)   
    } catch (error) {
       console.error(error) 
    }
     
};

export default insertCard;
