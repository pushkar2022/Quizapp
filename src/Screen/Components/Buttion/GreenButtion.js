import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GreenButtion = ({text='GET STARTED',bgColor='#684aff',textColor='#fff',onPress=()=>null}) => {
  return (
   <TouchableOpacity style={{backgroundColor:bgColor,borderRadius:24,height:50,justifyContent:'center',alignItems:'center'}} onPress={onPress}>
      <Text style={{textAlign:'center',color:textColor,fontWeight:'600'}}>{text}</Text>
   </TouchableOpacity>
  )
}

export default GreenButtion

const styles = StyleSheet.create({})