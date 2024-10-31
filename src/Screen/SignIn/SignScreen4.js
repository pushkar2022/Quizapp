import { Modal, Pressable, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
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
const SignScreen4 = () => {
  const navigation =useNavigation()
  const [verify,setVerify]=useState(false)


  return (
    <View style={Global.container}>
        <Modal
      visible={verify}
       animationType="slide"
       transparent={true}
       onRequestClose={()=>setVerify(false)}
     
      >
        <TouchableOpacity onPress={()=>setVerify(false)} style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}}>
  <Pressable onPress={()=>{}} style={{flex:1,justifyContent:'center',alignItems:'center',zIndex:1}}>
    <View  style={{width:'90%',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',height:300,borderRadius:40}}>
     <View>
      <View style={{borderRadius:50,backgroundColor:'#7251FF',padding:30}}>
     <Icon   name="user" size={25} fill style={{color:'#fff'}}/>
     </View>
     </View>
      <View>
        
        <Text style={{fontSize:20,fontWeight:'600',color:'#6D4CFD',textAlign:'center'}}>Successful!</Text>
        <Text style={{fontSize:14,fontWeight:'500',textAlign:'center',marginHorizontal:80,marginTop:15}}>Please wait a moment, we are preparing for you...</Text>

      </View>
      <View style={{width:'90%',marginTop:20}}>
    <GreenButtion text='Continue' onPress={()=>navigation.navigate('Home')}/>
    </View>
    </View>

  
  
  </Pressable>
        </TouchableOpacity>
        
        </Modal>
    {Headers()}
 <Text style={{marginTop:30,fontSize:20,letterSpacing:1,fontWeight:'700'}}>Create new password</Text>
 <Text style={{
  marginTop:10,
  fontSize:16,
  fontWeight:'400',
 }}>Save the new password in a safe place, if you forget it then you have to do a forgot password again.</Text>
<View style={{marginTop:100,}}>
     
<Text style={{fontSize:14,fontWeight:'600',marginTop:30}}>Create a new password</Text>
      <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
        fontSize:16,
        fontWeight:'600'
      }}/>
       <Text style={{fontSize:14,fontWeight:'600',marginTop:30}}>Confirm a new password</Text>
      <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
        fontSize:16,
        fontWeight:'600'
      }}/>

    

     
      </View>
      <View style={{marginTop:20}}/>

      <View style={{position:'absolute',bottom:30,left:10,right:10}}>
      <GreenButtion text='Continue' onPress={()=>setVerify(true)}/>
      </View>
  </View>
  )
}

export default SignScreen4

const styles = StyleSheet.create({})