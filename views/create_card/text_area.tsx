import React from "react";
import {StyleSheet, TextInput} from 'react-native';
import { views } from "../../constants/languages/EN/views";

export const TextArea = ({text, textSetter}) => {
    return (
        <TextInput
            editable
            multiline={true}
            onChangeText={input => textSetter(input)}
            placeholder={views.create_card.text_area.write_card}
            style={styles.input}
            value={text} 
        />
    )
}

const styles = StyleSheet.create({
    input: {
      height: '70%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlignVertical: 'top'
    },
  });