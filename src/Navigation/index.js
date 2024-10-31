import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Screen1,Screen2,Screen3,Screen4,Screen5,Screen6,Screen7,Screen8 } from '../Screen/Onboarding';
import { SignScreen1,SignScreen2,SignScreen3,SignScreen4 } from '../Screen/SignIn';
import TabNavigation from './TabNavigation';
import Setting from '../Screen/MyProfile/Setting';
const Stack=createNativeStackNavigator()


const Index = () => {
  return (
<NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
    <Stack.Screen name="Screen3" component={Screen3} />
    <Stack.Screen name="Screen4" component={Screen4} />
    <Stack.Screen name="Screen5" component={Screen5} />
    <Stack.Screen name="Screen6" component={Screen6} />
    <Stack.Screen name="Screen7" component={Screen7} />
    <Stack.Screen name="Screen8" component={Screen8} />
    <Stack.Screen name="SignScreen1" component={SignScreen1} />
    <Stack.Screen name="SignScreen2" component={SignScreen2} />
    <Stack.Screen name="SignScreen3" component={SignScreen3} />
    <Stack.Screen name="SignScreen4" component={SignScreen4} />
    <Stack.Screen name="Home" component={TabNavigation} />
    <Stack.Screen name="Setting" component={Setting}/>
   


    

   
  </Stack.Navigator>
</NavigationContainer>
      

  )
}

export default Index

const styles = StyleSheet.create({})