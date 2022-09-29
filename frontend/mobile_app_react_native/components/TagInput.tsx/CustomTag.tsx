import { Box, Button, CloseIcon, Flex, HStack, Spacer, Text } from "native-base";
import React from "react";
import {StyleSheet} from "react-native";
import { interfaceTagStructure } from "../../views/search/search";

interface tagInterface {
    tag : String,
    tagsList : interfaceTagStructure,
    tagsListSetter : any
}

const CustomTag = ({tag, tagsList, tagsListSetter}:tagInterface) =>{
    return (
        <Flex style={style.container}>
            <HStack>
                <Text>{tag}</Text>
                <Spacer />
                <Button 
                    style={style.button}
                    onPressOut ={
                        () =>{
                            tagsListSetter(
                                {
                                    list:tagsList.list.filter(e => e != tag),
                                    state: ! tagsList.state
                                }
                            )
                        }
                    }
                > 
                    <CloseIcon />
                </Button>
            </HStack>
        </Flex>
    )
}

export default CustomTag

const style = StyleSheet.create({
    button :{
        width : 40,
        height: 23,
        backgroundColor: "transparent",
    },
    container :{
        margin: 10,
        padding:5,
        paddingRight:0,
        width: "auto",
        height: 30,

        borderWidth: 1,
        borderRadius:10,

        justifyContent: "center",
        alignItems: "center",
        
    }
})