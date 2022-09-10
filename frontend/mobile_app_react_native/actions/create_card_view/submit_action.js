import { Alert } from "react-native";

import requirements from "./submit_requirement_test";
import {createTable, getDBConnection, insertData} from "../../local_storage/main";
import { enablePromise } from "react-native-sqlite-storage";

const submitAction = async (tags, text, tagsSetter, textSetter) => {
        if (requirements(tags, text)){ // Field not empty
            tagsSetter("")
            textSetter("")
            enablePromise(true)
            try{
                const db = await getDBConnection();
                await createTable(db);
                const insert = await insertData(db, {tag: tags, card: " "})
                console.log(insert);

            } catch(error){
                Alert.alert("Error")
                console.error(error);
            }
            
        }
        else{
            Alert.alert("Error","Fields should contain letters")
        }
}


export default submitAction;