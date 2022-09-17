import { enablePromise, SQLiteDatabase } from 'react-native-sqlite-storage';
import { tagsRequirements } from '../../actions/create_card_view/submit_requirement_test';
import selectionWithoutRestrictions from './selectionWithoutRestrictions';

const selection = async (db: SQLiteDatabase, setData, tags) => {
  try{
    // if there are no tags restrictions 
    enablePromise(true)
    if(!tagsRequirements(tags))
        await selectionWithoutRestrictions(db,setData)
  }catch(error){
    console.error('There in an error in selection function',error)
  }
};

export default selection;