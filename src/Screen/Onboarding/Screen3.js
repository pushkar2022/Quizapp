import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Global from '../../Style/Global'
import GreenButtion from '../Components/Buttion/GreenButtion'

const Screen3 = () => {
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
        >Find Fun and interesting quizzes to boost up your knowledge</Text>
        
      </View>
      <GreenButtion onPress={()=>navigation.navigate('Screen4')}/>
      <View  style={{marginTop:20}}/>
      <GreenButtion text='I ALREADY HAVE AN ACCOUNT ' bgColor='#A199C7FF' textColor='#684aff'/>

      
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({

  main:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center',
    // backgroundColor:'red'
  }
})