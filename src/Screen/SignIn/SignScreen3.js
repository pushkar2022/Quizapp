import { StyleSheet, Text, TextInput, View } from 'react-native'
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
const SignScreen3 = () => {
  const navigation =useNavigation()

  return (
    <View style={Global.container}>
    {Headers()}
 <Text style={{marginTop:30,fontSize:20,letterSpacing:1,fontWeight:'700'}}>You've got mail</Text>
 <Text style={{
  marginTop:10,
  fontSize:16,
  fontWeight:'400',
 }}>We have sent the OTP verification code to your email address. Check your email and enter the code below.</Text>
<View style={{marginTop:100,flexDirection:'row'}}>
      <TextInput style={{height: 40,
      width: 60,
      height: 60,
      backgroundColor:'#FAFAFA',
     
        fontSize:16,
        fontWeight:'600',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:12
      }}/>
        <TextInput style={{height: 40,
      width: 60,
      height: 60,
      backgroundColor:'#FAFAFA',
      marginLeft:15,
     
        fontSize:16,
        fontWeight:'600',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:12
      }}/>
       <TextInput style={{height: 40,
      width: 60,
      height: 60,
      backgroundColor:'#FAFAFA',
      marginLeft:15,
     
        fontSize:16,
        fontWeight:'600',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:12
      }}/>
       <TextInput style={{height: 40,
      width: 60,
      height: 60,
      backgroundColor:'#FAFAFA',
      marginLeft:15,
     
        fontSize:16,
        fontWeight:'600',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:12
      }}/>
     

    

     
      </View>
      <View style={{marginTop:20}}/>
      <Text style={{textAlign:'center'}}>Didn't receive email?</Text>
      <Text style={{textAlign:'center',marginTop:20}}>You can resend code in 55 s</Text>

      <View style={{position:'absolute',bottom:30,left:10,right:10}}>
      <GreenButtion text='Continue' onPress={()=>navigation.navigate('SignScreen4')}/>
      </View>
  </View>
  )
}

export default SignScreen3

const styles = StyleSheet.create({})