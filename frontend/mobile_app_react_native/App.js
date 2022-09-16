import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeScreen} from './views/home/home';
import { CreateCardView } from './views/create_card/create_card';
import { menu } from './constants/languages/EN/menu';
import { RemaindersView } from './views/remainders/remainders';
import { SearchView } from './views/search/search';
import initialStorage from './local_storage/storage';
const Stack = createNativeStackNavigator();
export const UserContext = createContext();

function App() {
  const [storage, storageSetter] = useState(initialStorage)
  return (
    <UserContext.Provider value={{data:storage, setter:storageSetter}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={menu.home} >
          <Stack.Screen name={menu.home} component={HomeScreen} />
          <Stack.Screen name={menu.card_adding} component={CreateCardView} />
          <Stack.Screen name={menu.reminders} component={RemaindersView} />
          <Stack.Screen name={menu.search} component={SearchView} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}


export default App;
