// NOT TESTED
import {SQLiteDatabase } from 'react-native-sqlite-storage';
import { userInformationTable} from '.././design';

interface dataItem {
    userName : String,
    mail : String,
    password : String 
}
const insertUser = async (db: SQLiteDatabase, dataItems: dataItem) => {  
  const insertQuery =
      `INSERT OR REPLACE INTO ${userInformationTable.tableName} 
      (
        ${userInformationTable.userName},
        ${userInformationTable.mail},
        ${userInformationTable.password})
        values 
         (
            '${dataItems.userName}',
            '${dataItems.mail}',
            '${dataItems.password}'
         );` ;
    return db.executeSql(insertQuery);
};

export default insertUser;