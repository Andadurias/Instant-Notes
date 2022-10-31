import React, { useState } from "react";
import {  ScrollView, StyleSheet, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubmitButton } from "./submit_button";
import { TagField } from "./tag_field";
import { TextArea } from "./text_area";
import submitAction from "../../actions/create_card_view/submit_action";
import TagInput from "../../components/TagInput.tsx/TagInput";

export function CreateCardView({ navigation }:any){
    const [card, setCard] = useState("");
    const taglistStructure = { state : true, list: []}
    const [tagsList, tagListSetter] = useState(taglistStructure)

    return (
        <View style={styles.container}>
            <View style={styles.tagInputView}>
                <TagInput 
                    tagsList={tagsList} 
                    tagsListSetter={tagListSetter}   
                />
            </View>
            <View style={styles.viewOfScrollView}>
            <TextArea text={card} textSetter={setCard}/>
            <SubmitButton
                onPress={() => submitAction(tagsList.list, card, tagListSetter, setCard)}
                title={"Submit"}
                background_color={'#007AFF'}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      flexDirection: "column"
    },
    tagInputView:{
        flex: 1
    },
    viewOfScrollView :{
        flex:7,
        //marginBottom:5
    },
    scrollView: {
        margin: 5
    }
  });