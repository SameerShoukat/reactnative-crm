import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Signin from '../screens/signin'
import About from "../screens/about";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const MainStack =()=> {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin} options={({navigation})=>({title:"Sign In & Up", headerLeft:()=><MaterialIcons name="menu" size={28} onPress={()=>navigation.openDrawer()} style={{    position:"absolute",
          left: 10}}/>})  }/>
           <Stack.Screen name="Home" component={Home} options={({navigation})=>({title:"Blood Donation App", headerLeft:()=><MaterialIcons name="menu" size={28} onPress={()=>navigation.openDrawer()} style={{    position:"absolute",
          left: 10}}/>})  }/>
        </Stack.Navigator>
        
    );
  }

  const AboutStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="About" component={About} options={({navigation})=>({title:"About Us", headerLeft:()=><MaterialIcons name="menu" size={28} onPress={()=>navigation.openDrawer()} style={{    position:"absolute",
          left: 10}}/>})  } />
      </Stack.Navigator>
    );
  };


export {
    MainStack, 
    AboutStackNavigator
}