import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Global from '../../Style/Global'
import { useNavigation } from '@react-navigation/native'

const Screen1 = () => {
  const navigation=useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Screen2')

    }, 2000)
  })
  return (
    <View style={Global.container}>
<View style={styles.main}>
<Text style={{textAlign:'center',fontSize:36,fontWeight:'bold'}}>Quizzo</Text>

</View>
     
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  main:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center',
    // backgroundColor:'red'
  }

})