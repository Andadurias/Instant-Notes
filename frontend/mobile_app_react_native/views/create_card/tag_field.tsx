import React, { useState } from "react";
import {  TextInput, StyleSheet } from "react-native";
import {views} from "../../constants/languages/EN/views"

export function TagField({tags, tagSetter}){
    return (
                <TextInput
                  style={styles.input}
                  onChangeText={tagSetter}
                  placeholder={views.create_card.tag_field.write_tags}
                  value={tags}
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