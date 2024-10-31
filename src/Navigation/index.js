import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Screen/Home/Home'
const Stack=createNativeStackNavigator()


const Index = () => {
  return (
<NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={Home} />
   
  </Stack.Navigator>
</NavigationContainer>
      

  )
}

export default Index

const styles = StyleSheet.create({})