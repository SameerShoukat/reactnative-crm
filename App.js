import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';
import { useState,useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/drawer'

export default function App() {
  const [font, setFont] = useState(true);


  useEffect(()=>{

    async function fonts() {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      })
      setTimeout(() => {
        setFont(false)
        
      }, 3000);
    
    }
   fonts()
  },[])


  if (font) {
    return (
      <View style={{backgroundColor:"none",flex:1, justifyContent:"center",alignItems:'center'}}>
        <Image source={require('./assets/loadeer.jpg')} style={{width:200,height:200,resizeMode:"contain"}}/>
      </View>
    );
  }
  else if(!font){
return (
    <NavigationContainer>
  <DrawerNavigator  />
</NavigationContainer>
  
  )
}
}
