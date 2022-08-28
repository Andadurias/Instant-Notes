import React from "react";
import { Alert, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubmitButton } from "./submit_button";
import { TagField } from "./tag_field";
import { TextArea } from "./text_area";


export function CreateCardView({ navigation }:any){
    
    return (
        <SafeAreaView>
            <TagField/>
            <TextArea/>
            <SubmitButton
                onPress={()=>Alert.alert("Submit button pressed")}
                title={"Submit"}
                background_color={'#007AFF'}
            />
        </SafeAreaView>
    )
}