import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text,View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Details from './components/Details';
import OnBoard from './components/OnBoarding';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="OnBoard" 
        options={
         {
          headerShown:false
         }
        }
        component={OnBoard} />
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

