import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text,View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Details from './components/Details';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        options={
         {
          headerShown:false
         }
        }
        component={Home} />
      <Stack.Screen name="Details" 
        options={
         {
          headerShown:false
         }
        }
        component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

