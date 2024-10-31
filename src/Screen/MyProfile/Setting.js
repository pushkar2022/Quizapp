import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

import Global from '../../Style/Global'
const Headers=()=>{
  return(
    <View style={{flexDirection:'row',alignItems:'center',gap:15}}>
      {/* <View style={{width:80}}> */}
      <Icon   name="arrowleft" size={25}/>
      {/* </View> */}
      <Text style={{fontWeight:'600',fontSize:16}}>Settings</Text>
      
    </View>
  )
}
const Setting = () => {
  return (
    <View style={Global.container}>
    {Headers()}
    <View style={{marginTop:25}}/>

<View style={styles.card}>

</View>
<View style={{marginTop:25}}/>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <View style={{flexDirection:'row',alignItems:'center'}}>
    <Icon name="user" size={25} color="#007bff" style={{width:50,}} />
    <Text style={{fontSize:20,fontWeight:'600'}}>Personal Info</Text>
  </View>
  <Icon name="right" size={25}  style={{width:30}}/>
</View>





    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  card:{
    width:'100%',
    height:100,
    backgroundColor:'#7659FF',
    borderRadius:15,
    padding:15

  },

})