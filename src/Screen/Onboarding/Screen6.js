import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
const Screen6 = () => {
  const navigation=useNavigation()

  return (
<View style={Global.container}>
      {Header()}
      <View style={{marginTop:25}}>
        <Text style={{fontSize:25,fontWeight:'600',textAlign:'center',letterSpacing:2}}>What type of account do you like to create?</Text>
        <Text style={{marginTop:15,fontSize:12,fontWeight:'400',textAlign:'center'}}>You can skip it if you're not sure.</Text>

      </View>
      <View style={{marginTop:20}}>

        <TouchableOpacity onPress={()=>navigation.navigate('Screen7')} style={{borderWidth:1,borderColor:'gray',height:80,borderRadius:18,flexDirection:'row',}}>
          <View style={{width:'20%',backgroundColor:'#3175FD',borderTopLeftRadius:15,borderBottomLeftRadius:15,justifyContent:'center',alignItems:'center'}}>
            <View style={{borderRadius:50,backgroundColor:'#336DE3',padding:10,width:50}}>
          <Icon name="profile" size={25} color="#fff" style={{textAlign:'center'}} />
          </View>
          </View>
          <Text style={{marginLeft:10,alignSelf:'center',fontSize:20,fontWeight:'800'}}>School</Text>
        </TouchableOpacity>
             
        <View style={{borderWidth:1,marginTop:20,  borderColor:'gray',height:80,borderRadius:18,flexDirection:'row',}}>
          <View style={{width:'20%',backgroundColor:'#FD9B0F',borderTopLeftRadius:15,borderBottomLeftRadius:15,justifyContent:'center',alignItems:'center'}}>
            <View style={{borderRadius:50,backgroundColor:'#E2901E',padding:10,width:50}}>
          <Icon name="profile" size={25} color="#fff" style={{textAlign:'center'}} />
          </View>
          </View>
          <Text style={{marginLeft:10,alignSelf:'center',fontSize:20,fontWeight:'800'}}>Teacher</Text>
        </View>

        <View style={{borderWidth:1,marginTop:20,  borderColor:'gray',height:80,borderRadius:18,flexDirection:'row',}}>
          <View style={{width:'20%',backgroundColor:'#2FD79C',borderTopLeftRadius:15,borderBottomLeftRadius:15,justifyContent:'center',alignItems:'center'}}>
            <View style={{borderRadius:50,backgroundColor:'#36C391',padding:10,width:50}}>
          <Icon name="profile" size={25} color="#fff" style={{textAlign:'center'}} />
          </View>
          </View>
          <Text style={{marginLeft:10,alignSelf:'center',fontSize:20,fontWeight:'800'}}>Student</Text>
        </View>
        <View style={{borderWidth:1,marginTop:20,  borderColor:'gray',height:80,borderRadius:18,flexDirection:'row',}}>
          <View style={{width:'20%',backgroundColor:'#FF6B73',borderTopLeftRadius:15,borderBottomLeftRadius:15,justifyContent:'center',alignItems:'center'}}>
            <View style={{borderRadius:50,backgroundColor:'#E46A76',padding:10,width:50}}>
          <Icon name="profile" size={25} color="#fff" style={{textAlign:'center'}} />
          </View>
          </View>
          <Text style={{marginLeft:10,alignSelf:'center',fontSize:20,fontWeight:'800'}}>Professional</Text>
        </View>
      </View>
      <View style={{flexDirection:'column',marginTop:200}}>
      <GreenButtion text='Skip' bgColor='#A199C7FF' textColor='#684aff'/>
      </View>
    </View>
  )
}

export default Screen6

const styles = StyleSheet.create({})