import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import firebase from '@react-native-firebase/app';
import Icon from 'react-native-vector-icons/AntDesign';
import Navigation from './src/Navigation'
const App = () => {
  return (
    <Navigation/>
    // <View>
    //    {/* <Icon name="caretdown" size={30} color="#4F8EF7" /> */}
    //   <Text>App</Text>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})