import { Alert } from 'react-native';
import { enablePromise, SQLiteDatabase } from 'react-native-sqlite-storage';
import { tagsProcessingListToList } from '../../actions/tagsProcessing/tagsProcessing';
import { interfaceTagStructure } from '../../views/search/search';
import selectionByTags from './selectionByTags';
import selectionWithoutRestrictions from './selectionWithoutRestrictions';

const selection = async (db: SQLiteDatabase, setData, tags: interfaceTagStructure) => {
  try{
    enablePromise(true)
    // if there are no tags restrictions 
    if(tags.list.length == 0 ){
      await selectionWithoutRestrictions(db,setData)
    }   
    else { // tags is not void 
      await selectionByTags(db, setData, tagsProcessingListToList(tags.list))
    }
  }catch(error){
    console.error('There in an error in selection function',error)
  }
};

export default selection;