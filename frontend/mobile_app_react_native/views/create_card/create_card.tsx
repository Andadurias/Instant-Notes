import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubmitButton } from "./submit_button";
import { TagField } from "./tag_field";
import { TextArea } from "./text_area";
import submitAction from "../../actions/create_card_view/submit_action";

export function CreateCardView({ navigation }:any){
    const [tags, setTags] = useState("");
    const [card, setCard] = useState("");

    return (
        <SafeAreaView>
            <TagField tags={tags} tagSetter={setTags}/>
            <TextArea text={card} textSetter={setCard}/>
            <SubmitButton
                onPress={submitAction(tags, card, setTags, setCard)}
                title={"Submit"}
                background_color={'#007AFF'}
            />
        </SafeAreaView>
    )
}