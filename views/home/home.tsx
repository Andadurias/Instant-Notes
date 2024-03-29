import React from "react"
import "../../components/buttons"
import { AppButton, AppContainer } from "../../components/buttons"
import { deep_saffron, madder_lake, metalic_seaweed, } from "../../constants/colors"
import { menu } from "../../constants/languages/EN/menu"

export function HomeScreen({ navigation}:any){
    return(
    <AppContainer>
        <AppButton
            title="Add cards"
            onPress={()=>navigation.push(menu.card_adding)}
            background_color={deep_saffron}
        />
        <AppButton
            title="Search"
            onPress={()=>navigation.push(menu.search)}
            background_color={madder_lake}
        />
        <AppButton
            title={menu.about_us}
            onPress={()=>navigation.push(menu.about_us)}
            background_color={metalic_seaweed}
        />
    </AppContainer>
    )
}