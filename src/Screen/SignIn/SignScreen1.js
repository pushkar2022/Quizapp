import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Global from '../../Style/Global'
import Icon from 'react-native-vector-icons/AntDesign';
import GreenButtion from '../Components/Buttion/GreenButtion';
import SignScreen2 from './SignScreen2';

const Headers=()=>{
  return(
    <View style={{flexDirection:'row'}}>
      <View style={{width:80}}>
      <Icon   name="arrowleft" size={25}/>
      </View>
      
    </View>
  )
}
const SignScreen1 = () => {
  const navigation =useNavigation()
  return (
    <View style={Global.container}>
      {Headers()}
   <Text style={{marginTop:30,fontSize:20,letterSpacing:1,fontWeight:'700'}}>Hello there</Text>
<View style={{flex:1,justifyContent:'center',marginTop:-300}}>
   <Text style={{fontSize:14,fontWeight:'600',marginTop:30}}>Email</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}/>

         <Text style={{fontSize:14,fontWeight:'600',marginTop:30}}>Password</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}/>

        <Text>Remember me</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SignScreen2')}>
        <Text style={{fontSize:16,fontWeight:'600',color:'#684AFF',textAlign:'center'}}>Forget Password?</Text>

        </TouchableOpacity>
        </View>
        <View style={{position:'absolute',bottom:30,left:10,right:10}}>
        <GreenButtion text='SIGN IN' onPress={()=>navigation.navigate('Home')}/>
        </View>
    </View>
  )
}

export default SignScreen1

const styles = StyleSheet.create({})