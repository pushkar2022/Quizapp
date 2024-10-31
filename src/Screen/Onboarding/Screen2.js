import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Global from '../../Style/Global'
import GreenButtion from '../Components/Buttion/GreenButtion'
import { useNavigation } from '@react-navigation/native'

export default function Screen2() {
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
        >Create,Share and play quizzes whenever and wherever you want</Text>
        
      </View>
      <GreenButtion onPress={()=>navigation.navigate('Screen3')}/>
      <View  style={{marginTop:20}}/>
      <GreenButtion text='I ALREADY HAVE AN ACCOUNT ' bgColor='#A199C7FF' textColor='#684aff' onPress={()=>navigation.navigate('SignScreen1')}/>

      
    </View>
  )
}

const styles = StyleSheet.create({

  main:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center',
    // backgroundColor:'red'
  }
})