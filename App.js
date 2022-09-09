import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Drinks from "./NutrientsMenu/Drinks";
import Food from "./NutrientsMenu/Food";
import Nutrients from "./NutrientsMenu/Nutrients";
import Updates from "./NutrientsMenu/Drinks2";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Meteors" screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Nutrients" component={Nutrients} />
        <Stack.Screen name="Updates" component={Updates} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;