import { View } from "native-base"
import React from "react"
import { Text } from "react-native-svg"
import "../../components/buttons"
import { menu } from "../../constants/languages/EN/menu"

export function AboutUs({ navigation}:any){
    return(
    <View>
        <Text>
            Instant notes is an app make with love. 
        </Text>
    </View>
    )
}