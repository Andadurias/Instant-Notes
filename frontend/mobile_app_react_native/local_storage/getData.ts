import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { tableName } from '../constants/local_storage';

interface dataItem {
    tag : String,
    card : String
}

const getData = async (db: SQLiteDatabase, setData) => {
  try{
      enablePromise(true)
      const results = await db.executeSql(`SELECT * FROM ${tableName};`);
      let listOfResult : any[] = []
      results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
              listOfResult.push(result.rows.item(index))
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