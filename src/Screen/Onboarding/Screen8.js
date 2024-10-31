import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Global from '../../Style/Global'
import Icon from 'react-native-vector-icons/AntDesign';
import GreenButtion from '../Components/Buttion/GreenButtion';

const Header=()=>{
  return(
    <View style={{flexDirection:'row',alignItems:'center'}}>
      <View style={{width:80}}>
      <Icon   name="arrowleft" size={25}/>
      </View>
      <View
      style={{backgroundColor:'#eeeeee', width:200,height:5,borderRadius:25}}
      >

        <View style={{backgroundColor:'#684aff',borderRadius:25, width:'100%',height:5}}/>
      </View>
    </View>
  )
}
const Screen8 = () => {
  const navigation=useNavigation()
  const [verify,setVerify]=useState(false)

  return (
    <View style={Global.container}>
      <Modal
      visible={verify}
       animationType="slide"
       transparent={true}
       onRequestClose={()=>setVerify(false)}
     
      >
        <Pressable onPress={()=>setVerify(false)} style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}}>
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
    </View>
  
  
  </Pressable>
        </Pressable>
        
        </Modal>

      {Header()}
      <View>
        <Text style={{textAlign:'center',fontWeight:'800',fontSize:30}} >Create an account</Text>
        <Text style={{textAlign:'center',marginTop:15,fontSize:14,fontWeight:'400'}}>Please complete your profile. Don't worry, your data will remain private and only you can see it.</Text>
      </View>

      <View style={{marginTop:20,justifyContent:'center',flex:1}}>
        <Text style={{fontSize:14,fontWeight:'600'}}>User Name</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}/>
        <Text style={{fontSize:14,fontWeight:'600',marginTop:20}}>Email</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}/>
         <Text style={{fontSize:14,fontWeight:'600',marginTop:20}}>Password</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}/>
        
      </View>
      <View style={{marginTop:250}}>
      <GreenButtion text='Sign Up' onPress={()=>setVerify(true)}/>
      </View>
      </View>
  )
}

export default Screen8

const styles = StyleSheet.create({})