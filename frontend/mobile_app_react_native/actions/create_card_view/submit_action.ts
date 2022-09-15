import { Alert } from "react-native";

import requirements from "./submit_requirement_test";
import {getDBConnection} from "../../local_storage/main";
import { enablePromise } from "react-native-sqlite-storage";
import insertCard from "../../local_storage/insertion/insertCard";
import createTables from "../../local_storage/createTable";

const submitAction = async (tags:String, text:String, tagsSetter, textSetter) => {
    //Alert.alert(text)
        if (requirements(tags, text)){ // Field not empty
            enablePromise(true)
            try{
                const db = await getDBConnection();
                await createTables(db);
                await insertCard(db, {tags: [tags], content: text})
                tagsSetter("")
                textSetter("")
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