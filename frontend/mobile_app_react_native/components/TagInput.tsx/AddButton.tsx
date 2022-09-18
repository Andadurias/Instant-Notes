import React, { useState } from "react";
import { Button, HStack, Input, VStack} from "native-base";
import { StyleSheet } from "react-native";

const AddButton = (tag: String, list: String [], listSetter) => {
    const addTag = ( tag: String, list: String [], listSetter) => {
        list.push(tag)
        listSetter(list)
    }
    return (
        <Button onPress={() => addTag(tag, list, listSetter)}>
            +
        </Button>
    )
}
export default AddButton;