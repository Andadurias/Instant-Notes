import { Alert } from "react-native";

import requirements from "./submit_requirement_test";
import {createTable, getDBConnection} from "../../local_storage/main";
import { enablePromise } from "react-native-sqlite-storage";

const submitAction = async (tags, text, tagsSetter, textSetter) => {
        if (requirements(tags, text)){ // Field not empty
            tagsSetter("")
            textSetter("")
             
            enablePromise(true)
            try{
                const db = await getDBConnection();
                await createTable(db);
                Alert.alert("Save correctly")

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