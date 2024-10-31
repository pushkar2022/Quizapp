import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Global from '../../Style/Global'
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GreenButtion from '../Components/Buttion/GreenButtion';


const Headers=()=>{
  return(
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <View style={{flexDirection:'row',gap:10}}>
        <Text style={{fontWeight:'800',fontSize:18}}>Q</Text>
        <Text style={{fontWeight:'800',fontSize:18}}>Quizzo</Text>

      </View>
      <View style={{flexDirection:'row',gap:10}}>
      <Icon   name="search1" size={25}/>

<MaterialIcons name="notifications-none" size={25}/>

      </View>
      
    </View>
  )
}
const Home = () => {
  return (

    <View style={Global.container}>
      <ScrollView>
     {Headers()}
     <View style={{marginTop:25}}/>

      <View style={styles.card}>
        <Text
        style={{fontWeight:'500',fontSize:18,color:'white',width:200}}
        >Play quiz together with your firends now!</Text>
        <View style={{width:130,marginTop:18}}>
<TouchableOpacity style={{backgroundColor:'white',borderRadius:24,height:30,justifyContent:'center',alignItems:'center'}} onPress={()=>{}}>
      <Text style={{textAlign:'center',color:'#6B54DD',fontWeight:'600'}}>Find Friends</Text>
   </TouchableOpacity>
</View>
      </View>
      
      <View style={{marginTop:25}}/>

      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
  
        <Text style={{fontSize:20,fontWeight:'500'}}>DisCover</Text>
       
        <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
          <Text>View All</Text>
           <Icon   name="arrowright" size={25}/>


        </View>
      </View>
      <View style={{marginTop:25}}/>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      c
      data={[1,2,3,4,5]}
      renderItem={({item,index})=>{

        return(<View  style={styles.showCart}>
          <View style={{height:100,backgroundColor:'green',width:'100%',borderTopLeftRadius:15,borderTopRightRadius:15}}>

          </View>
         

          </View>
          )

      }}
      />
   <View style={{marginTop:25}}/>

<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>

  <Text style={{fontSize:20,fontWeight:'500'}}>Top Authors</Text>
 
  <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
    <Text>View All</Text>
     <Icon   name="arrowright" size={25}/>


  </View>
</View>
<View style={{marginTop:25}}/>
<FlatList
horizontal
showsHorizontalScrollIndicator={false}
c
data={[1,2,3,4,5]}
renderItem={({item,index})=>{

  return(<View  style={styles.showCart}>
    <View style={{height:100,backgroundColor:'green',width:'100%',borderTopLeftRadius:15,borderTopRightRadius:15}}>

    </View>
   

    </View>
    )

}}
/>

<View style={{marginTop:25}}/>

<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>

  <Text style={{fontSize:20,fontWeight:'500'}}>Top Collections</Text>
 
  <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
    <Text>View All</Text>
     <Icon   name="arrowright" size={25}/>


  </View>
</View>
<View style={{marginTop:25}}/>
<FlatList
horizontal
showsHorizontalScrollIndicator={false}
c
data={[1,2,3,4,5]}
renderItem={({item,index})=>{

  return(<View  style={styles.showCart}>
    <View style={{height:100,backgroundColor:'green',width:'100%',borderTopLeftRadius:15,borderTopRightRadius:15}}>

    </View>
   

    </View>
    )

}}
/>


</ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  card:{
    width:'100%',
    // height:100,
    backgroundColor:'#7659FF',
    borderRadius:15,
    padding:15

  },
  showCart:{
    backgroundColor:'#fff',
    width:150,
    height:200,
    borderRadius:15,
    marginLeft:10,
    
    alignItems:'center',
    zIndex:1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
     elevation:5,
     marginBottom:10

  }
})