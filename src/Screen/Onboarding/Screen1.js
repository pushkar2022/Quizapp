import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Global from '../../Style/Global'
import { useNavigation } from '@react-navigation/native'

const Screen1 = () => {
  const navigation=useNavigation()
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     navigation.navigate('Screen2')

  //   }, 2000)
  // })
  return (
   
<View style={[Global.container,{backgroundColor:'#32073F',justifyContent:'center',alignItems:'center'}]}>

<Image
style={{width:258,height:172}}

source={require('../../Assest/HomeScreen.png')}
/>
  <Text style={{color:'#E9E9E9',fontSize:22,textAlign:'center',width:258,marginTop:40}}>Grow Your Soft Skill And Be More Creative</Text>

  <TouchableOpacity style={{backgroundColor:'#fff', height:40,width:142,justifyContent:'center',alignItems:'center',borderRadius:5,marginTop:40}} onPress={()=>navigation.navigate('Home')}>
    <Text style={{color:'#32073F',textAlign:'center',fontSize:16,fontWeight:'600'}}>Get Started</Text>
  </TouchableOpacity>

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