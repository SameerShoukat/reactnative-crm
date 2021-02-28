import React from "react";
import { MainStack, AboutStackNavigator} from "./homeStack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {globalStyles} from '../../style/globalStyle'
import {View,Image,SafeAreaView,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props,{ navigation }) {

  const signUp = async(props)=>{
    await AsyncStorage.removeItem('@college_key')
    props.navigation.navigate('Signin')
  }


  return (
    <DrawerContentScrollView {...props}>
      <View style={{flex:1}}>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={{backgroundColor:"none",flex:1, justifyContent:"center",alignItems:'center',height:150,flexDirection:"row"}}>
          <Image source={require('../../assets/loadeer.jpg')} style={{width:150,height:150,resizeMode:"contain",borderRadius:200}}/>
      </View>
      <DrawerItemList {...props}  />
      <DrawerItem label="log out" inactiveBackgroundColor="#825cbf" inactiveTintColor="#fff" onPress={()=> signUp(props)}/>
      </SafeAreaView>
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    drawerStyle={{
      backgroundColor: '#ffff',
      paddingTop:10,
      width:220,
    }}  drawerContentOptions={{
      activeTintColor: '#825cbf',
      itemStyle: { marginVertical: 10},
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}>

      <Drawer.Screen name="Home" component={MainStack}   />
    </Drawer.Navigator>
  );
}
;

export default DrawerNavigator;