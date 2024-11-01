import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Global from '../../Style/Global'
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GreenButtion from '../Components/Buttion/GreenButtion';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Headers=()=>{
  return(
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <View style={{flexDirection:'row',gap:10}}>
       <Image
        style={{width:50,height:50,borderRadius:25}}
        source={require('../../Assest/profile.png')}
       />
       <View style={{gap:5}}>
        <Text style={{color:'#32073F',fontSize:12,fontWeight:'600'}}> Rumi Aktar</Text>
        <Text style={{color:'#382C3C',fontSize:10,}}>Let’s learn something new</Text>


       </View>

      </View>
      <View style={{flexDirection:'row',gap:10}}>
        <View style={{backgroundColor:'#32073F',borderRadius:50,padding:10}}>

<MaterialIcons name="notifications-none" size={25} color='#fff'/>
</View>
      </View>
      
    </View>
  )
}
const Home = () => {
  const navigation=useNavigation()
  let [data,setData]=useState([])
 // let data=[{id:1,name:'JavaScript',amt:5000,img:''},{id:2,name:'React',amt:5000,img:''},{id:3,name:'Ui Ux',amt:5000,img:''},{id:4,name:'Node js',amt:5000,img:''},{id:6,name:'Python',amt:5000,img:''},{id:7,name:'Flutter',amt:5000,img:''},{id:8,name:'Php',amt:5000,img:''},{id:9,name:'C++',amt:5000,img:''}]

  const getProducts = async () => {
    const user = auth().currentUser;
  console.log('Getting products',user)
    if (!user) {
      console.log('User not logged in');
      return;
    }
  
    try {
      const productsSnapshot = await firestore()
        .collection('products')
        .where('userId', '==', user.uid)
        .orderBy('createdAt', 'desc')
        .get();
  
      const products = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      console.log('Products retrieved:', products);
      setData(products)
      
    } catch (error) {
      console.error('Error getting products:', error);
    }
  };
  useEffect(()=>{
    getProducts()

  },[])
  return (

    <View style={Global.container}>
      <ScrollView>
     {Headers()}
     <View style={{marginTop:16}}/>
     <View style={styles.searchBar}>
      <Icon name="search1" size={20} color="#A199C7FF" style={{marginLeft:10,width:20,marginTop:10}} />
      <TextInput 
      style={{ fontSize:18,justifyContent:'center'}}
      
      />

     </View>
     <View style={{marginTop:16}}/>

<View style={{flexWrap:'wrap',flexDirection:'row',gap:16,justifyContent:'center',alignItems:'center'}}>
 
{[1,2,3,4,5,6]?.map((item)=>{

    return(
      <TouchableOpacity onPress={async()=>await getProducts()} style={{width:40,height:40,borderRadius:50,backgroundColor:'#32073F',marginHorizontal:25}}>

      </TouchableOpacity>
    )

})}
    

 
  
 

</View>
<View style={{marginTop:16}}/>
<Text style={{fontSize:14,fontWeight:600}}>Popular Courses</Text>

<View style={{marginTop:16}}/>


<FlatList
numColumns={2}
data={data}
renderItem={({item,index})=>{
  console.log('item?.imagesitem?.images',item?.images?.[0],item?.name)
  return(
    <TouchableOpacity onPress={()=>navigation.navigate('DetailsCourse',{item:item})} style={{width:'45%',borderRadius:5,backgroundColor:'#32073F',height:120,margin:5,elevation:5}}>
    <View style={{backgroundColor:'#fff',width:'100%',height:95,justifyContent:'center',}}>
      <View style={{flexDirection:'row',alignItems:'center',gap:10,marginLeft:15}}>
        {/* <View style={{width:64,height:51,backgroundColor:'#32073F',borderRadius:5}}> */}
          <Image
          // style={{width:100,height:100,}}
          style={{width:64,height:51,backgroundColor:'#32073F',borderRadius:5}}
          source={{uri:item?.images?.[0]}}
          />

          {/* </View> */}

    <Text style={{fontSize:16,fontWeight:'600'}}>{item?.name}</Text>
    </View>
    </View>
    <Text style={{color:'#fff',textAlign:'center'}}>$ {item?.price}</Text>
    </TouchableOpacity>
  )
}}


/>

   


</ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  searchBar:{
    height:40,
    width:'100%',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#382C3C',
    flexDirection:'row',
    // padding:0,
    // backgroundColor:'green',
    // justifyContent:'center',
    // alignItems:'center',

  },
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