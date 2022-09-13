import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { cardTable, tableName } from '../constants/local_storage';

interface dataItem {
    tag : String,
    card : String
}

const getData = async (db: SQLiteDatabase, setData) => {
  try{
      enablePromise(true)
      const results = await db.executeSql(`SELECT * FROM ${cardTable.tableName};`);
      let listOfResult : any[] = []
      results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
              const row  = result.rows.item(index)
              listOfResult.push({ content: row[cardTable.content]})
            }
        });
        //console.log(listOfResult)
        setData(listOfResult);    
    }
    catch(error){
      console.error(error);
    }
};

export default getData;