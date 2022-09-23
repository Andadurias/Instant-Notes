import React, { useState } from "react";
import { HStack, Input, Text, VStack} from "native-base";
import { StyleSheet } from "react-native";
import AddButton from "./AddButton";
import { interfaceTagStructure } from "../../views/search/search";

interface tagInputInterface {
    tagsList: interfaceTagStructure;
    tagsListSetter: any;
}
const TagInput = ({tagsList, tagsListSetter}:tagInputInterface) => {
    const [tag, setTag] = useState("")

    return (
        <VStack style={style.container}>
            <Input
                value={tag} 
                onChangeText={setTag}
                InputRightElement = {AddButton(tag, setTag, tagsList, tagsListSetter)}
            />
            <HStack>
                {
                    tagsList.list.map(
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
        alignItems: "center",
        margin: 10
    }

})