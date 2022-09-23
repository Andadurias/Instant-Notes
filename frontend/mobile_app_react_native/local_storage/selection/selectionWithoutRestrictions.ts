import { SQLiteDatabase } from 'react-native-sqlite-storage';
import { cardTable, tagsTable } from '.././design';


const selectionWithoutRestrictions = async (db: SQLiteDatabase, setData) => {
  try{
    // remove 
    console.log("-- Tags table--- ")
    const results2 = await db.executeSql(
      `SELECT
           * 
      FROM 
          ${tagsTable.tableName}
      ;`);
          results2.forEach(result => {
          for (let index = 0; index < result.rows.length; index++) {
            const row  = result.rows.item(index)
            console.log(row)
          }
      });
      console.log("---Tags table end ---")
      // remove
      const results = await db.executeSql(
        `SELECT
             * 
        FROM 
            ${cardTable.tableName}
        ORDER BY
            ${cardTable.creationTime} DESC;
        ;`);
        
      let listOfResult : any[] = []
      results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
              const row  = result.rows.item(index)

              listOfResult.push(
                { 
                    content: row[cardTable.content], 
                    creationTime: row[cardTable.creationTime],
                    id : row[cardTable.id]
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

export default selectionWithoutRestrictions;