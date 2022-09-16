import {openDatabase} from 'react-native-sqlite-storage';
import { databaseName } from '../constants/local_storage';

const getDBConnection = async () => {
  return openDatabase({name: databaseName, location: 'default'});
};

export default getDBConnection; 