import React from "react";
import { Box, VStack,Text, HStack } from "native-base";
import { StyleSheet } from "react-native";

function Card({content, date}){
    return (
      <Box style={styles.card}>
        <VStack>
          <Box>
            <Text>{content}</Text>
          </Box>
          <HStack>
            <Text>Date: </Text>
            <Text>{date}</Text>
          </HStack>
        </VStack>
      </Box>           
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