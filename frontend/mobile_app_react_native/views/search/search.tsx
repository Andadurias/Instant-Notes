import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { UserContext } from "../../App";
import { AppButton } from "../../components/buttons";
import { metalic_seaweed } from "../../constants/colors";
import createTable from "../../local_storage/createTable";
import getDBConnection from "../../local_storage/getDBConnection";
import selection from "../../local_storage/selection/selection";
import initialStorage from "../../local_storage/storage";
import Card from "./components/card";
import { cardTable } from "../../constants/local_storage"

export function SearchView({ navigation }:any){
    const [results, setResults] = useState([ {"value": "A"}]);
    const context = useContext(UserContext);
    useEffect ( () => {
        const list =  async () => {
            try{
                const db = await getDBConnection();
                await createTable(db);
                //const results = await getData(db);
                await selection(db, setResults,"")
            }
            catch(e){
                 console.error(e)
            }
        }
       list()
    }, [context.data.updated]);
    
    
    return (
        <View>
            <Text> You are at search view 🧐 </Text>
            {
                results.map( r =>(
                        <View key={Math.random()}>
                            <Card 
                                content={r[cardTable.content]} 
                                date={r[cardTable.creationTime]} 
                            />                      
                        </View>
                    )
                )
           }
           <AppButton 
           // TODO dispathc
                onPress={()=> {
                    context.setter({
                            updated:context.data.updated * -1,
                            userId: context.data.userId
                        })
                }}
                title="update"
                background_color={metalic_seaweed}
           />
        </View>
    )
}
