import { Alert } from "react-native";
import CreateDatabase from "../../local_storage/create_database";
import requirements from "./submit_requirement_test";
import * as local_storage from "../../local_storage/main";

function submitAction(tags, text, tagsSetter, textSetter){
    return ()=>{
        if (requirements(tags, text)){
            CreateDatabase('test')
            Alert.alert("Save correctly")
            tagsSetter("")
            textSetter("")

            
        }
        else
            Alert.alert("Error","Fields should contain letters")
    }
}

export default submitAction;