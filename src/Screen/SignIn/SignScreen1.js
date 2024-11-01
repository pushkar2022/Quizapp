import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Global from '../../Style/Global'
import Icon from 'react-native-vector-icons/AntDesign';
import GreenButtion from '../Components/Buttion/GreenButtion';
import SignScreen2 from './SignScreen2';
import auth from '@react-native-firebase/auth';


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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [messages, setMessages] = React.useState('');

  const loginUser = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully:', userCredential.user);
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setMessages('No user found for that email')
        console.log('No user found for that email.');
      } else if (error.code === 'auth/wrong-password') {
        setMessages('Incorrect password')
        console.log('Incorrect password.');
      } else {
        setMessages(error)
        console.error(error);
      }
    }
  };
  
  return (
    <View style={Global.container}>
      {Headers()}
   <Text style={{marginTop:30,fontSize:20,letterSpacing:1,fontWeight:'700'}}>Hello there</Text>
<View style={{flex:1,justifyContent:'center',marginTop:-300}}>
   <Text style={{fontSize:14,fontWeight:'600',marginTop:30}}>Email</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}
        onChangeText={setEmail}
        value={email}
        
        />

         <Text style={{fontSize:14,fontWeight:'600',marginTop:30}}>Password</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}
      onChangeText={setPassword}
      value={password}
        />
             {messages && <Text style={{color:'red',marginTop:10}}>{messages}</Text>}


        <Text>Remember me</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SignScreen2')}>
        <Text style={{fontSize:16,fontWeight:'600',color:'#684AFF',textAlign:'center'}}>Forget Password?</Text>

        </TouchableOpacity>
        </View>
        <View style={{position:'absolute',bottom:30,left:10,right:10}}>
        <GreenButtion text='SIGN IN' onPress={async()=>
          // navigation.navigate('Home')
        await  loginUser()
          
          }/>
        </View>
    </View>
  )
}

export default SignScreen1

const styles = StyleSheet.create({})