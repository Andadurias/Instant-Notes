import { SQLiteDatabase } from 'react-native-sqlite-storage';
import { cardTable, tagsTable } from '../design';


const selectionByTags= async (db: SQLiteDatabase, setData, tags : String[]) => {
  try{
        // first selection for one tags 
        const tag = tags.pop()
        const query = `SELECT
                            ${cardTable.tableName}.${cardTable.content} , 
                            ${cardTable.tableName}.${cardTable.creationTime} 
                        FROM 
                            ${cardTable.tableName}
                        LEFT JOIN
                            ${tagsTable.tableName}
                        ON 
                            ${cardTable.tableName}.${cardTable.id} 
                            = 
                            ${tagsTable.tableName}.${tagsTable.card}
                        WHERE 
                            ${tagsTable.tableName}.${tagsTable.tag}
                            LIKE 
                            '%${tag}%'
                        ORDER BY
                            ${cardTable.creationTime} DESC;
                        ;`;
         console.log(query) 

        const results = await db.executeSql(query);

        
      let listOfResult : any[] = []
      results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
              const row  = result.rows.item(index)
              listOfResult.push(
                { 
                    content: row[cardTable.content], 
                    creationTime: row[cardTable.creationTime]
                })
            }
        });
        console.log(listOfResult)
        setData(listOfResult);    
    }
    catch(error){
      console.error(error);
    }
};

export default selectionByTags;