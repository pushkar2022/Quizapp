import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Global from '../../Style/Global'
import Icon from 'react-native-vector-icons/AntDesign';
import GreenButtion from '../Components/Buttion/GreenButtion';

const Headers=()=>{
  return(
    <View style={{flexDirection:'row'}}>
      <View style={{width:80}}>
      <Icon   name="arrowleft" size={25}/>
      </View>
      
    </View>
  )
}
const SignScreen2 = () => {
  const navigation =useNavigation()

  return (
    <View style={Global.container}>
    {Headers()}
 <Text style={{marginTop:30,fontSize:20,letterSpacing:1,fontWeight:'700'}}>Forgot Password</Text>
 <Text style={{
  marginTop:10,
  fontSize:16,
  fontWeight:'400',
 }}>Enter your email address to get an Otp code to reset your password.</Text>
<View style={{flex:1,marginTop:100}}>
 <Text style={{fontSize:14,fontWeight:'600',marginTop:30}}>Email</Text>
      <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
        fontSize:16,
        fontWeight:'600'
      }}/>

    

     
      </View>
      <View style={{position:'absolute',bottom:30,left:10,right:10}}>
      <GreenButtion text='Continue' onPress={()=>navigation.navigate('SignScreen3')}/>
      </View>
  </View>
  )
}

export default SignScreen2

const styles = StyleSheet.create({})