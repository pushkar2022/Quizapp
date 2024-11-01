
import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Global from '../../Style/Global'
import Icon from'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import GreenButtion from '../Components/Buttion/GreenButtion';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import { launchImageLibrary } from 'react-native-image-picker';
import AWS, { Pricing } from 'aws-sdk';
import RNFS from 'react-native-fs';
import { Buffer } from 'buffer';

global.Buffer = global.Buffer || Buffer;

AWS.config.update({
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey',
  region: 'us-east-1',
});

const s3 = new AWS.S3();

const AddCourse = () => {
      const navigation =useNavigation()
    
      const [name, setName] = useState('');
      const [price, setPrice] = useState('');
      const [description, setDescription] = useState('');
      const [status, setStatus] = useState('available');
      const [images, setImages] = useState([]);
      const [video, setVideo] = useState('');

    
          const uploadToS3 = async (fileUri, folderPath, fileType) => {
            const fileName = `${Date.now()}_${fileUri.split('/').pop()}`;
            const filePath = fileUri.replace('file://', ''); // Remove 'file://' prefix on iOS
          
            try {
              // Read the file content as a buffer
              const fileContent = await RNFS.readFile(filePath, 'base64');
              const buffer = Buffer.from(fileContent, 'base64');
          
              const params = {
                Bucket: 'perksevent',
                Key: `${folderPath}/${fileName}`,
                Body: buffer,
                ContentType: fileType,
                ACL: 'public-read',
              };
          
              const data = await s3.upload(params).promise();
              console.log('File uploaded successfully:', data.Location);
              return data.Location; // This is the file URL on S3
            } catch (error) {
              console.error('Error uploading file to S3:', error);
              throw error;
            }
          };
          
    
      const selectImages = () => {
            console.log('oke')
        launchImageLibrary({ mediaType: 'photo', selectionLimit: 5 }, response => {
          if (response.assets) {
            setImages(response.assets.map(asset => asset.uri));
          }
        });
      };
    
      const selectVideo = () => {
        launchImageLibrary({ mediaType: 'video' }, response => {
          if (response.assets) {
            setVideo(response.assets[0].uri);
          }
        });
      };

      const addProduct = async () => {
            
            const user = auth().currentUser;
            console.log('useruser',user)
          
            if (!user) {
              console.log('User not logged in');
              return;
            }
          
            try {
                 
                  const imageUrls = await Promise.all(
                        images.map(async (imageUri) => {
                          return await uploadToS3(imageUri, `products/images/${user.uid}`, 'image/jpeg'); // Adjust MIME type as needed
                        })
                      );
                      console.log('imageUrlsimageUrlsimageUrls',imageUrls)
                     
                  // return 
                      // Upload video to S3 (if provided)
                      let videoUrl = '';
                      if (video) {
                        videoUrl = await uploadToS3(video, `products/videos/${user.uid}`, 'video/mp4'); // Adjust MIME type as needed
                      }
            
              await firestore().collection('products').add({
                name,
                price,
                description,
                images: imageUrls,
                video: videoUrl,
                status,
                userId: user.uid,
                createdAt: firestore.FieldValue.serverTimestamp(),
              });
          
              console.log('Product added successfully!');
            } catch (error) {
              console.error('Error adding product:', error);
            }
          };
  return (
    <View style={Global.container}>


      <Text style={styles.label}>Add Course name</Text>
      <TextInput
      style={styles.input}
      onChangeText={setName}
      placeholder='Enter Course Name'
      value={name}
      />
      <Text style={styles.label}>Add Course Price</Text>
      <TextInput
      style={styles.input}
      onChangeText={setPrice}
      placeholder='Enter Course Name'
      value={price}
      />
       <Text style={styles.label}>Add Course Description</Text>
      <TextInput
      style={styles.input}
      onChangeText={setDescription}
      placeholder='Enter Course Name'
      value={description}
      />

<View style={{marginTop:10}}/>
<Image
style={{width:150,height:150,borderRadius:75}}
source={{uri:images[0]}}
/>

      <View style={{marginTop:10}}/>
       <Button title="Select Images" onPress={selectImages} />
      <View style={{marginTop:10}}/>

       <Button title="Select Video" onPress={selectVideo} />
       <View style={{marginTop:10}}/>

       <GreenButtion text="add Course" onPress={async()=>{
           await addProduct()
   
       }}/>
    </View>
  )
}

export default AddCourse

const styles = StyleSheet.create({
      label:{
fontSize:16,
fontWeight:'700',
marginTop:10

      },
      input:{
            borderRadius:10,
            borderWidth:1.5,
            borderColor:'gray',
            marginTop:10,
            fontSize:16,
            fontWeight:'600',
            paddingLeft:10,
            

      }
})