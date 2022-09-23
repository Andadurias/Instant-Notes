import React from "react";
import { Button } from "native-base";
import { interfaceTagStructure } from "../../views/search/search";
/**
 * AddButton 
 * @param tag The tag that have been written on the input
 * @param setTag It change the input value that have been written
 * @param list List of existed and yet inserted tags
 * @param listSetter Set the list of existed tags
 * @returns 
 */
const AddButton = (tag: String, setTag, list: interfaceTagStructure, listSetter) => {
    const addTag = ( tag: String, setTag, list: interfaceTagStructure, listSetter) => {
        let new_list = list.list
        new_list.push(tag)
        listSetter(
            {
                state: (list.state == false),
                list : new_list
            }
        )
        setTag("")
    }
    return (
        <Button onPress={() => addTag(tag, setTag,list, listSetter)}>
            +
        </Button>
    )
}
export default AddButton;