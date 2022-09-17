import { SQLiteDatabase } from 'react-native-sqlite-storage';
import { cardTable } from '../../constants/local_storage';


const selectionWithoutRestrictions = async (db: SQLiteDatabase, setData) => {
  try{
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
                    creationTime: row[cardTable.creationTime]
                })
            }
        });
        //console.log(listOfResult)
        setData(listOfResult);    
    }
    catch(error){
      console.error(error);
    }
};

export default selectionWithoutRestrictions;