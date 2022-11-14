import React, { useEffect, useState } from "react";
import { Box, VStack,Text, HStack } from "native-base";
import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";

function Card({content, date, id}){
  const fullContent = content
  const [showAll, setShowAll] = useState(false)
  const [currentContent, setCurrentContent] = useState(content)
  const substringLength = 40
  useEffect(() => {
    if(showAll)
      setCurrentContent(fullContent)
    else 
    setCurrentContent(fullContent.substring(0,substringLength))
  }, [showAll]);

  return (
    <SafeAreaView style={styles.card}>
        <Pressable onPress={
            () => setShowAll(! showAll)
          }>
          <Text>
            {currentContent}
          </Text>
          <Text>Date: {date}       Id: {id}</Text>
        </Pressable>
    </SafeAreaView>
  )
}
export default Card;

const styles = StyleSheet.create({
    card: {
      borderWidth: 1,
      padding: 10,
      margin: 15,
      marginTop: 0,
      bg:"primary.500"
    },
  });