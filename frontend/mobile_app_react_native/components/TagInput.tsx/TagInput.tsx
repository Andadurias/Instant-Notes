import React, { useState } from "react";
import { HStack, Input, Text, VStack} from "native-base";
import { StyleSheet } from "react-native";
import AddButton from "./AddButton";

const TagInput = () => {
    const [tag, setTag] = useState("")
    const [tagsList, tagsListSetter] = useState([])

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