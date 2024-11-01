import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Global from '../../Style/Global'
import Icon from'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import Video from 'react-native-video';
const Headers=(navigation,name)=>{
      return(
            <View style={{flexDirection:'row',gap:100,alignItems:'center'}}>
                  <TouchableOpacity onPress={()=>navigation.goBack()} style={{borderRadius:25,backgroundColor:'#32073F',padding:12,width:40}}>
                  <Icon name="left" size={15} color='#fff' />
                  </TouchableOpacity>
                  <Text style={{fontSize:14,color:'#32073F',fontWeight:'600'}}>{name}</Text>
            </View>
      )
}

const DetailsCourse = ({route}) => {
      const navigation =useNavigation()
      console.log('route?.params?.itemroute?.params?.item',route?.params?.item)
      const {name,video,price,description}=route?.params?.item||{}
      let data=[{id:1,name:'Introduction to Html'},{id:2,name:'Introduction to Html'},{id:3,name:'Introduction to Html'},{id:4,name:'Introduction to Html'},{id:5,name:'Introduction to Html'}]
      
  return (
    <View style={Global.container}>
      {Headers(navigation,name)}
      <View style={{marginTop:20}}/>
      {/* <View style={styles.cart}> */}
      <Video
        source={{ uri: video?video:'https://perksevent.s3.us-east-1.amazonaws.com/WhatsApp+Video+2024-11-01+at+1.09.38+PM.mp4' }} // URL of the video
        style={styles.video}
        controls={true} // Show playback controls
        resizeMode="contain" // Adjust video size to the container
        onError={(e) => console.log('Error playing video:', e)} // Error handling
      />

      {/* </View>  */}
      <View style={{marginTop:20}}/>
      <Text style={{textAlign:'center',fontSize:16,fontWeight:'700',color:'#32073F'}}>{name}</Text>
      <View style={{marginTop:15}}/>

      <Text style={{textAlign:'center',paddingHorizontal:20}}>Basic guideline & tips & tricks for how to become a React Developer easily.</Text>

      <View style={{marginTop:20}}/>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                  <View style={{width:30,height:30,borderRadius:20,backgroundColor:'#32073F'}} />
                  <Text>Mentor: Charli Fallon</Text>
            </View>
            <Text style={{}}>105 Videos</Text>

      </View>
      <View style={{marginTop:20}}/>
      <View style={styles.cart1}>
            <View style={{backgroundColor:'#32073F',width:132,height:37,justifyContent:'center',alignItems:'center',borderRadius:5,opacity:500}}>
                  <Text style={{color:'#fff',textAlign:'center'}}>Videos</Text>
            </View>
            <View style={{backgroundColor:'#6f5178',width:132,height:37,justifyContent:'center',alignItems:'center',borderRadius:5,opacity:500}}>
                  <Text style={{color:'#fff',textAlign:'center'}}>Record Session</Text>
            </View>

      </View>
      <View style={{marginTop:20}}/>
      <FlatList 
      data={data}
      renderItem={({item})=>{
            return(
                  <View style={{flexDirection:'row',gap:10,marginTop:20}}>
                        <Image
                        style={{width:20,height:20}}

                        source={require('../../Assest/play.png')}

                        />
                        <Text>{item?.name}</Text>


                        </View>
            )
      }}



/>

     



      
    </View>
  )
}

export default DetailsCourse

const styles = StyleSheet.create({

      cart:{
            width:'100%',
            height:147,
            backgroundColor:'#32073F',
            borderRadius:15,
            padding:15
        
          },
          cart1:{
            width:'100%',
            height:71,
            backgroundColor:'#ebe6eb',
            // opacity:0.6,
            borderRadius:15,
            padding:15,
            alignItems:'center',
            // justifyContent:'space-between',
           
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            
             gap:10,
            
        
          },
          video: {
            width: '100%',
            height: 300,
          },
})