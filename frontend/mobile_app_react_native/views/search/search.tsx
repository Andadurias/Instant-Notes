import React, { useContext, useEffect, useState } from "react";
import {  ScrollView, StyleSheet, StatusBar, Text, View } from "react-native";
import { UserContext } from "../../App";
import { AppButton } from "../../components/buttons";
import { metalic_seaweed } from "../../constants/colors";
import createTable from "../../local_storage/createTable";
import getDBConnection from "../../local_storage/getDBConnection";
import selection from "../../local_storage/selection/selection";
import initialStorage from "../../local_storage/storage";
import Card from "./components/card";
import { cardTable } from "../../local_storage/design"
import TagInput from "../../components/TagInput.tsx/TagInput";
import { VStack, Button } from "native-base";

export function SearchView({ navigation }:any){
    const [results, setResults] = useState([ {"value": "A"}]);
    const context = useContext(UserContext);
    const [tagsList, tagListSetter] = useState([])

    useEffect ( () => {
        const list =  async () => {
            try{
                const db = await getDBConnection();
                await createTable(db);
                await selection(db, setResults,tagsList)
            }
            catch(e){
                 console.error(e)
            }
        }
       list()
    }, [context.data.updated, tagsList]);
    
    
    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
          }]}>
            <View style={{ flex: 1}}>
                <TagInput 
                    tagsList={tagsList} 
                    tagsListSetter={tagListSetter}   
                />
            </View>
            <View style={{ flex: 6}}>
                <ScrollView style={{
                    paddingBottom: 5
                }}>
                {
                    // Show the cards
                    results.map( 
                        r =>(
                            <Card 
                                key={Math.random()}
                                content={r[cardTable.content]} 
                                date={r[cardTable.creationTime]} 
                            />                       
                        )
                    )    
                }
                </ScrollView>
            </View>
          </View>
    )
    /*
        <View style={styles.container}>
            <View style={styles.tagInput}>
                <TagInput 
                    tagsList={tagsList} 
                    tagsListSetter={tagListSetter}
                    
                />
            </View>
            <SafeAreaView>
            <ScrollView style={styles.scrollView}>
                <VStack>
                    {
                        // Show the cards
                        results.map( 
                            r =>(
                                <Card 
                                    key={Math.random()}
                                    content={r[cardTable.content]} 
                                    date={r[cardTable.creationTime]} 
                                />                       
                            )
                        )    
                    }
                </VStack>
           </ScrollView>
           </SafeAreaView>
           <View style={}> </View>
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
    */
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
    flex: 4,
    paddingTop: StatusBar.currentHeight,
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    tagInput :{
        flex:1
    }
  });