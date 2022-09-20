import React, { useState } from "react";
import { HStack, Input, Text, VStack} from "native-base";
import { StyleSheet } from "react-native";
import AddButton from "./AddButton";

interface tagInputInterface {
    tagsList: String[];
    tagsListSetter: any;
}
const TagInput = ({tagsList, tagsListSetter}:tagInputInterface) => {
    const [tag, setTag] = useState("")

    return (
        <VStack style={style.container}>
            <Input 
                onChangeText={setTag}
                InputRightElement = {AddButton(tag, tagsList, tagsListSetter)}
            />
            <HStack>
                {
                    tagsList.map(
                        tag => <Text key={Math.random()}> {tag} </Text>
                    )
                }
            </HStack>
        </VStack>
    )
}
export default TagInput

const style = StyleSheet.create({
    container :{
        alignItems: "center"
    }

})