import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Signin from '../screens/signin'
import About from "../screens/about";
import StudentForm from '../screens/studentForm'
import AcademicPost from '../components/acdemicPost'
import JobPost from '../components/jobpost'
import JobForm from '../components/jobForm'
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const MainStack =()=> {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Signin" component={Signin} options={({navigation})=>({title:"Sign In & Up", headerLeft:()=><MaterialIcons name="menu" size={28} onPress={()=>navigation.openDrawer()} style={{    position:"absolute",
          left: 10}}/>})  }/>
           <Stack.Screen name="Home"  component={Home} options={({navigation})=>({title:"",headerStyle: {backgroundColor: '#955da8' }, headerLeft:()=><MaterialIcons name="menu" size={28}  onPress={()=>navigation.openDrawer()} style={{    position:"absolute",
          left: 10, color:"#fff"}}/>})  }/>
          <Stack.Screen name="studentForm" component={StudentForm} options={({navigation})=>({title:"Student Form"}) }/>
          <Stack.Screen name="jobPost" component={JobPost} options={({navigation})=>({title:"Job List"}) }/>
          <Stack.Screen name="jobForm" component={JobForm} options={({navigation})=>({title:"Post Job"}) }/>
          <Stack.Screen name="AcademicPost" component={AcademicPost} options={({navigation})=>({title:"Student Resumes"}) }/>
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