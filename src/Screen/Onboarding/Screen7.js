import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
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

        <View style={{backgroundColor:'#684aff',borderRadius:25, width:'50%',height:5}}/>
      </View>
    </View>
  )
}


const Screen7 = () => {
  const navigation=useNavigation()

  return (
    <View style={Global.container}>
      {Header()}
      <View>
        <Text style={{textAlign:'center',fontWeight:'800',fontSize:30}} >Create an account</Text>
        <Text style={{textAlign:'center',marginTop:15,fontSize:14,fontWeight:'400'}}>Please complete your profile. Don't worry, your data will remain private and only you can see it.</Text>
      </View>

      <View style={{marginTop:20}}>
        <Text style={{fontSize:14,fontWeight:'600'}}>Full Name</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}/>
        <Text style={{fontSize:14,fontWeight:'600',marginTop:20}}>Date of Birth</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}/>
         <Text style={{fontSize:14,fontWeight:'600',marginTop:20}}>Phone Number</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}/>
         <Text style={{fontSize:14,fontWeight:'600',marginTop:20}}>Country</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}/>
          <Text style={{fontSize:14,fontWeight:'600',marginTop:20}}>Age</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}/>
      </View>
      <View style={{marginTop:250}}>
      <GreenButtion text='Contine' onPress={()=>navigation.navigate('Screen8')}/>
      </View>
      </View>
  )
}

export default Screen7

const styles = StyleSheet.create({})