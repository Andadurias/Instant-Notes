import React from "react";
import {StyleSheet, TextInput} from 'react-native';
import { views } from "../../constants/languages/EN/views";
export const TextArea = () => {
    return (
        <TextInput
            editable
            maxLength={40}
            multiline
            placeholder={views.create_card.text_area.write_card}
            style={styles.input} 
        />
    )
}

const styles = StyleSheet.create({
    input: {
      height: '70%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });