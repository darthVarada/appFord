import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

//Importing screens into the App 

import Home from './screens/Home';


const Separator = () => (
  <View style={styles.separator} />
);

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/> 
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    alignItems: 'center',

  },
  textStyles: {
    color: "white",
    paddingHorizontal: 20
    
  },
  ImageFord: {
    marginTop: 40,
    marginBottom: 90,
    paddingTop: 50,
    width: 200,
    height: 60,

  },
  textInputs:{
    left:5,
  },
  
  separator: {
    marginVertical: 4,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingtop: 20,
  },
  textView:{
    marginBottom: 40,
  },
});
