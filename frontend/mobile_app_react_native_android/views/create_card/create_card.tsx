import React from "react";
import { Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TagField } from "./tag_field";


export function CreateCardView({ navigation }:any){
    
    return (
        <SafeAreaView>
            <TagField/>
        </SafeAreaView>
    )
}