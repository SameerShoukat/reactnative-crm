import React from 'react';
import {View,Text,StyleSheet,Image,SafeAreaView,FlatList,ScrollView, Alert,} from 'react-native';
import {globalStyles} from '../../style/globalStyle';
import { Container, Header, Content, Card, CardItem, Body, Item,Label,Picker,Button } from 'native-base';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import firebase from  '../config/index'
import { AntDesign,Zocial,Entypo } from '@expo/vector-icons';
 


export default function JobPost({route,navigation}) {

const [loading, setLoading] = useState(true);
const[noPost , setNoPost] = useState(false)
const [info , setInfo] = useState();
const showDelete = route.params.forAdmin



  /*getting users*/
  const users = [];

  useEffect(()=>{
    retriveData()
  })

  const retriveData= async ()=> {
   await firebase.firestore().collection('job_posts/').get().then(function(querySnapshot) {
          querySnapshot.forEach(function(documentSnapshot) {
            users.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
            });
          });
          setInfo(users)
          setTimeout(() => {
              setLoading(false)
          }, 1000);
       })
    }


if (loading) {
  return (
    <View style={{backgroundColor:"#fff",flex:1, justifyContent:"center",alignItems:'center'}}>
      <Image source={require('../../assets/loading.gif')} style={{width:200,height:200,resizeMode:"contain"}}/>
    </View>
  );
}

else if (!loading){
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"grey"}}>
      <FlatList data={info} 
      renderItem={({item}) =>
        <Card style={{borderBottomWidth:5,
          borderBottomColor:"#000",
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10,
      }}>
        <CardItem>
          <Body style={{flex:1}}>
            <View style={{flex:1,width:"100%"}}>
            <Text style={globalStyles.heading}>
               {item.company}
            </Text>
            <Text style={globalStyles.text}>
                Postion : {item.title}
            </Text>
            <Text style={globalStyles.text}>
                salary : {item.salary}
            </Text>
            <Text style={globalStyles.text}>
            <AntDesign name="enviromento" size={15} color="black" /> {'' + item.address}
            </Text>
            <Text style={globalStyles.text}>
            <Zocial name="call" size={18} color="black" /> {item.phoneNumber}
            </Text>
            <Text style={globalStyles.text}>
            <Entypo name="mail-with-circle" size={24} color="black" /> {item.email}
            </Text>
            <Image source={require('../../assets/thumb.jpg')} style={{position:"absolute",right:0,resizeMode:"contain",height:100,width:100,top:30}} />
            {showDelete &&<AntDesign name="delete" size={28} color="black" style={{position:"absolute",right:0}}  />}
            </View>
          </Body>
        </CardItem>
      </Card> 
    }
      />
   <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
{noPost && <Label style={{flex:1,textAlign:"center",padding:10,color:"#047594",fontSize:30}}>No JObS FOR NOW</Label>}  
</View>
      </SafeAreaView>
  );
}

}