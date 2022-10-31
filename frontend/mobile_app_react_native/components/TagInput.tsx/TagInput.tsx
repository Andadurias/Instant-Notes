import React, { useState } from "react";
import { HStack, Input, VStack} from "native-base";
import { StyleSheet } from "react-native";
import AddButton from "./AddButton";
import { interfaceTagStructure } from "../../views/search/search";
import CustomTag from "./CustomTag";
import stringToHash from "../../actions/utils/stringToHash";

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
                    //TODO añadir aquí como botón el tag, la acción coge la tagList y "actualiza el tag sin la lista".
                    tagsList.list.map(
                        tag => <CustomTag key={stringToHash(tag)} 
                        tag={tag} tagsList={tagsList} 
                        tagsListSetter={tagsListSetter} />
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