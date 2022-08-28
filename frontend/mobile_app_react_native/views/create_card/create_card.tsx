import React from "react";
import { Text, View } from "react-native";
import { TagField } from "./tag_field";
export function CreateCardView({ navigation }:any){
    return (
        <View>
            <Text> You are on the Create card View 🥳</Text>
            <TagField />
        </View>
    )
}