import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Global from '../../Style/Global'
import GreenButtion from '../Components/Buttion/GreenButtion'

const Screen4 = () => {
  const navigation=useNavigation()

  return (
    <View style={Global.container}>
    <View style={styles.main}>
      <Text
      style={{
        fontSize:25,
        fontWeight:'600',
        textAlign:'center',
        letterSpacing:0,
        marginHorizontal:25,
        // lineHeight:20
      }}
      >Play and take quiz challenges together with your friends.</Text>
      
    </View>
    <GreenButtion onPress={()=>navigation.navigate('Screen5')}/>
    <View  style={{marginTop:20}}/>
    <GreenButtion text='I ALREADY HAVE AN ACCOUNT ' bgColor='#A199C7FF' textColor='#684aff'/>

    
  </View>
  )
}

export default Screen4

const styles = StyleSheet.create({

  main:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center',
    // backgroundColor:'red'
  }
})