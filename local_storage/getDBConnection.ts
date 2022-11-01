import {openDatabase} from 'react-native-sqlite-storage';
import { databaseName } from './design';

const getDBConnection = async () => {
  return openDatabase({name: databaseName, location: 'default'});
};

export default getDBConnection; 