import React, { useState } from "react";
import {  TextInput, StyleSheet } from "react-native";
import {views} from "../../constants/languages/EN/views"
export function TagField(){
    const [selected, setSelected] = useState("");
    return (
                <TextInput
                style={styles.input}
                onChangeText={setSelected}
                placeholder={views.create_card.tag_field.write_tags}
                value={selected}
                />
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });