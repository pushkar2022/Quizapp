import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Global from '../../Style/Global'
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GreenButtion from '../Components/Buttion/GreenButtion';
import { useNavigation } from '@react-navigation/native';

const Headers=(navigation)=>{
  return(
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <View style={{flexDirection:'row',gap:10}}>
        <Text style={{fontWeight:'800',fontSize:18}}>Q</Text>
        <Text style={{fontWeight:'800',fontSize:18}}>Profile</Text>

      </View>
      <View style={{flexDirection:'row',gap:10}}>
      <Icon   name="sharealt" size={25}/>

      <Icon   name="instagram" size={25}/>
      <TouchableOpacity onPress={()=>navigation.navigate('Setting')}>
      <Icon   name="setting" size={25}/>
      </TouchableOpacity>






      </View>
      
    </View>
  )
}

const Profile = () => {
  const navigation =useNavigation()
  return (
    <View style={Global.container}>
      {Headers(navigation)}
      <View style={{marginTop:25}}/>

<View style={styles.card}>

</View>
<View style={{marginTop:25}}/>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
  <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
    <View style={{borderRadius:70,width:70,height:70,backgroundColor:'#6991FF'}} />
    <View style={{flexDirection:'column',justifyContent:'space-between',gap:10}}>
      <Text style={{fontSize:16,fontWeight:'800'}}>Pushkar kumar</Text>
      <Text>@Pushkar kumar</Text>

    </View>
  </View>
  <View style={{width:'40%'}}>
      <GreenButtion text='Edit Profile'/>
  </View>

</View>
<View style={{marginTop:25}}/>
<View style={{flexDirection:'row',alignItems:'center',gap:10}}>
  <View style={{width:'32%'}}>
<GreenButtion text='Quizzo'/>
</View>
<View style={{width:'32%'}}>

<GreenButtion text='Collections'/>
</View>

<View style={{width:'32%'}}>

<GreenButtion text='About'/>
</View>

</View>

<View style={{marginTop:25}}/>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>

  <Text style={{fontSize:20,fontWeight:'500'}}>45 Quizzo</Text>
 
  <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
    <Text style={{color:'#7659FF',fontWeight:'600'}}>Newest</Text>
     <Icon   name="arrowright" size={25}/>
    


  </View>
</View>
<FlatList
     data={[1,2,3,4,5,6,7,8,9,10]}
     showsVerticalScrollIndicator={false}
     
     renderItem={({item,index})=>{
      return(
        <View style={styles.cartshow}>


        </View>
      )
     }}


/>


    </View>
  )
}

export default Profile

const styles = StyleSheet.create({

  card:{
    width:'100%',
    height:100,
    backgroundColor:'#7659FF',
    borderRadius:15,
    padding:15

  },
  cartshow:{
    backgroundColor:'#7659FF',
    height:100,

    marginTop:20,
    borderRadius:15,
   

  }
})