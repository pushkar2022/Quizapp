import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home/Home'
import Profile from '../Screen/MyProfile/Profile';
import AddCourse from '../Screen/Home/AddCourse';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
   
      <Tab.Navigator
      screenOptions={
        
        ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Library') {
                iconName = focused ? 'book' : 'book';
              } else if (route.name === 'Join') {
                iconName = focused ? 'heart' : 'heart';
              }
             
                else if (route.name === 'Profile') {
                  iconName = focused ? 'user' : 'user';
                }
  
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#007bff',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 60,
              paddingBottom: 10,
            },
            headerShown: false,
            tabBarShowLabel: false,
          })}
     
      >
       <Tab.Screen name="Home" component={Home} />
       <Tab.Screen name="Library" component={Home} />
       <Tab.Screen name="Join" component={AddCourse} />
       
       <Tab.Screen name="Profile" component={Profile} />

        {/* <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} /> */} 
      </Tab.Navigator>
   
  )
}

export default TabNavigation

const styles = StyleSheet.create({})