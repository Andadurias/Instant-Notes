import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeScreen} from './views/home/home';
import { CreateCardView } from './views/create_card/create_card';
import { menu } from './constants/languages/EN/menu';
import { RemaindersView } from './views/remainders/remainders';
import { SearchView } from './views/search/search';
import initialStorage from './local_storage/storage';
import { NativeBaseProvider } from 'native-base';
import { AboutUs } from './views/about_us/about_us';
const Stack = createNativeStackNavigator();
export const UserContext = createContext({});

function App() {
  const [storage, storageSetter] = useState(initialStorage)
  return (
    <UserContext.Provider value={{data:storage, setter:storageSetter}}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={menu.home} >
            <Stack.Screen name={menu.home} component={HomeScreen} />
            <Stack.Screen name={menu.card_adding} component={CreateCardView} />
            <Stack.Screen name={menu.about_us} component={AboutUs} />
            <Stack.Screen name={menu.search} component={SearchView} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </UserContext.Provider>
  );
}
export default App;
