import React, { useState } from "react";
import { Button, HStack, Input, VStack} from "native-base";
import { StyleSheet } from "react-native";

const AddButton = (tag: String, setTag, list: String [], listSetter) => {
    const addTag = ( tag: String, setTag, list: String [], listSetter) => {
        list.push(tag)
        listSetter(list)
        setTag("")
    }
    return (
        <Button onPress={() => addTag(tag, setTag,list, listSetter)}>
            +
        </Button>
    )
}
export default AddButton;