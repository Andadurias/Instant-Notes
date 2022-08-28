import { Alert } from "react-native";
import requirements from "./submit_requirement_test";

function submitAction(tags, text, tagsSetter, textSetter){
    return ()=>{
        if (requirements(tags, text)){
            Alert.alert("Save correctly")
            tagsSetter("")
            textSetter("")
        }
        else
            Alert.alert("Error","Fields should contain letters")
    }
}

export default submitAction;