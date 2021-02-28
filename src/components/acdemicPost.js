import React from 'react';
import {View,Text,StyleSheet,Image,SafeAreaView,FlatList,ScrollView, Alert} from 'react-native';
import {globalStyles} from '../../style/globalStyle'
import { Container, Header, Content, Card, CardItem, Body, Item,Label,Picker,Button } from 'native-base';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import firebase from  '../config/index'
import { AntDesign,Zocial,Entypo } from '@expo/vector-icons';


export default function AcademicPost({route}) {
const [loading, setLoading] = useState(true);
const[noResume , setNoResume] = useState(false)
const [info , setInfo] = useState();
const showDelete = route.params.forAdmin


  /*getting users*/
  const users = [];

  useEffect(()=>{
    retriveData()
  })

  const retriveData= async ()=> {
    await firebase.firestore().collection('student_cv/').get().then(function(querySnapshot) {
          querySnapshot.forEach(function(documentSnapshot) {
            users.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
            });
          });
          const myUsers = users.filter(item => new Date().getFullYear() - item.dobYear > 18) 
          if(myUsers.length > 0){
            setInfo(myUsers)
            setLoading(false)
  
          }
          else{
            setNoResume(true)
            setLoading(false)
          }
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
    <SafeAreaView style={{flex:6}}>
      <FlatList data={info} 
      renderItem={({item}) =>
        <Card style={{borderBottomWidth:5,
          borderBottomColor:"#0000",
          borderBottomLeftRadius:10,
          borderBottomRightRadius:30,
      }}>
        <CardItem >
          <Body style={globalStyles.donorCard}>
            <View style={{flex:1}}>
            <Text style={globalStyles.heading}>
               {item.fullName}
            </Text>
            <Text style={globalStyles.text}>
               { new Date().getFullYear() - item.dobYear -1 } Year Old 
            </Text>
            <Text style={globalStyles.text}>
                Grade  : {item.grade}
            </Text>
            <Text style={globalStyles.text}>
                Percentage :{ Math.floor(item.obtained_marks / item.total_marks *100)} %
            </Text>
            <Text style={globalStyles.text}>
            <Zocial name="call" size={18} color="black" /> {item.phoneNumber}
            </Text>
            </View>
            <View style={{flex:1}}>
            { item.profile == null ?
            <Image source={require('../../assets/spare.png')} style={globalStyles.profile} />
            :
            <Image source={{uri:item.profile}} style={globalStyles.profile} />
            }
            {showDelete &&<AntDesign name="delete" size={28} color="black" style={{position:"absolute",bottom:-35,right:10}}  />}
            </View>
          </Body>
        </CardItem>
      </Card> 
    }
      />
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
{noResume && <Label style={{flex:1,textAlign:"center",padding:10,color:"#047594",fontSize:30}}>No Resume For now</Label>}  
</View>
      </SafeAreaView>
      
  );
}
/* <Text style={globalStyles.text}>
            <Entypo name="mail-with-circle" size={24} color="black" /> {item.email}
            </Text>*/
}