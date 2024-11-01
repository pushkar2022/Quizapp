import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Global from '../../Style/Global'
import Icon from 'react-native-vector-icons/AntDesign';
import GreenButtion from '../Components/Buttion/GreenButtion';
import auth from '@react-native-firebase/auth';


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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [messages, setMessages] = React.useState('');
  const registerUser = async () => {
    setMessages('')

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully:', userCredential.user);
      navigation.navigate('SignScreen1');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessages('That email address is already in use!')
        console.log('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
    setMessages('That email address is invalid!')

        console.log('That email address is invalid!');
      } else {
    setMessages(error)

        console.error(error);
      }
    }
  };
  

  return (
    <View style={Global.container}>
      {Header()}
      <View>
        <Text style={{textAlign:'center',fontWeight:'800',fontSize:30}} >Create an account</Text>
        <Text style={{textAlign:'center',marginTop:15,fontSize:14,fontWeight:'400'}}>Please complete your profile. Don't worry, your data will remain private and only you can see it.</Text>
      </View>

      <View style={{marginTop:20}}>
        <Text style={{fontSize:14,fontWeight:'600'}}>Email</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}
        onChangeText={setEmail}
        value={email}
        />
        <Text style={{fontSize:14,fontWeight:'600',marginTop:20}}>password</Text>
        <TextInput style={{height: 40, borderColor: '#684AFF', borderBottomWidth:1,
          fontSize:16,
          fontWeight:'600'
        }}
        onChangeText={setPassword}
        value={password}
        />
        
      </View>
      {messages && <Text style={{color:'red',marginTop:10}}>{messages}</Text>}
      <View style={{marginTop:250}}>
      <GreenButtion text='Contine' onPress={async()=>
        // navigation.navigate('Screen8')
      await registerUser()
        }/>
        <View style={{marginTop:30}}/>

<GreenButtion text='Skip' bgColor='green'   onPress={async()=>
        navigation.navigate('SignScreen1')
      // await registerUser()
        }/>
      </View>
      </View>
  )
}

export default Screen7

const styles = StyleSheet.create({})