import React, { useContext, useEffect, useState } from "react";
import {  ScrollView, StyleSheet, StatusBar, Text, View } from "react-native";
import { UserContext } from "../../App";
import createTable from "../../local_storage/createTable";
import getDBConnection from "../../local_storage/getDBConnection";
import selection from "../../local_storage/selection/selection";
import Card from "./components/card";
import { cardTable } from "../../local_storage/design"
import TagInput from "../../components/TagInput.tsx/TagInput";

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
    }, [tagsList]);
    
    
    return (
        <View style={styles.container}>
            <View style={styles.tagInputView}>
                <TagInput 
                    tagsList={tagsList} 
                    tagsListSetter={tagListSetter}   
                />
            </View>
            <View style={styles.viewOfScrollView}>
                <ScrollView style={styles.scrollView}>
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
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      flexDirection: "column"
    },
    tagInputView:{
        flex: 1
    },
    viewOfScrollView :{
        flex:7,
        //marginBottom:5
    },
    scrollView: {
        margin: 5
    }
  });