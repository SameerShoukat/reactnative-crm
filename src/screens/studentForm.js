import React,{useEffect} from 'react';
import { StyleSheet, View ,Image,TouchableOpacity,ScrollView,ActivityIndicator, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button,Text,Grid,Col,Picker,Icon } from 'native-base';
import { useState } from 'react';
import {Platform} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from  '../config/index'
import * as ImagePicker from 'expo-image-picker';
import {globalStyles} from '../../style/globalStyle'


export default function StudentForm(){

  const ref =firebase.firestore();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber]=useState('');
    const [grade , setGrade] = useState('');
    const[oMarks , setOmarks] = useState('');
    const [tMarks, setTmarks] = useState('')

    /*for media*/
    const [image, setImage] = useState(null);


    /*date of birth*/
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
   const showCalender =()=>{
    setShow(true);
   }

   const pickImage = async () => {

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    
      console.log(result);
    
      if (!result.cancelled) {
        setImage(result.uri);
      }
  
    }
  };




   let insertUser = ()=>{
    if(fullName.trim() === ""){
      Alert.alert('Fullname Required')
    }
    else if(email.trim() === ""){
     Alert.alert('Email Required')
   }
   else if(phoneNumber.trim() === ""){
     Alert.alert('Phone Number Required')
   }
   else if(grade.trim() === ""){
     Alert.alert('grade Required')
   }
   else if(oMarks.trim() === ""){
     Alert.alert('obtained marks Required')
   }
   else if(tMarks.trim() === ""){
    Alert.alert('total marks Required')
  }
   else if(date === ""){
     Alert.alert('Date Of Birth Required')
   }
 
   else{
    const key = ref.collection("student_cv").doc().id
   ref.collection(`student_cv`).doc().set({
     fullName : fullName,
     email : email,
     phoneNumber : phoneNumber,
     grade : grade,
     date: date,
     profile : image,
     dobYear : date.getUTCFullYear(),
     obtained_marks : oMarks,
     total_marks : tMarks,
     key:key
   })
    Alert.alert("You Resume Has Registered")
   setFullName('');
   setEmail('');
   setPhoneNumber('');
   setGrade('');
   setOmarks('');
   setTmarks('')
   //setImage(null)
 }
 }

    return(
<ScrollView>
    <View>
    <Item  style={{flex:1, flexDirection:"row", justifyContent:"space-around",borderColor:"transparent", margin:10}}>
            <Text style={{textAlign:"center",fontSize:25, color:"grey"}}>Post Resume</Text>
            <TouchableOpacity  style={styles.thumbnail} onPress={pickImage}>
            <View style={styles.thumbnail}>
            {image === null ? <Text style={{position:"absolute",opacity:.3,textAlign:"center"}}>Select Photo {'\n'} optional</Text>:<Image style={styles.avatar} source={{ uri: image }} />}
            </View>
              </TouchableOpacity>
          </Item>
        <Form>
        <Item floatingLabel last>
          <Label>FullName</Label>
          <Input onChangeText={val => setFullName(val)} value={fullName} />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input keyboardType="email-address"  onChangeText={val => setEmail(val)} value={email}/>
        </Item>
        <Item floatingLabel>
          <Label>Phone Number</Label>
          <Input keyboardType='numeric'  onChangeText={val => setPhoneNumber(val)} value={phoneNumber}/>
        </Item>
        <Item style={{flexDirection: 'row', alignItems: 'center',margin:10}} >
      <Label>Grade In Intermediate</Label>
      <Picker
       selectedValue={grade}
        style={{ height: 50, width: 150,right:0, borderWidth: 1, borderColor: 'red', borderRadius: 4 }}
        onValueChange={(itemValue, itemIndex) => setGrade(itemValue)}
  >
    <Picker.Item label="select you intermediate grade" value=" " />
    <Picker.Item label="A+" value="A+" />
    <Picker.Item label="A" value="A" />
    <Picker.Item label="B" value="B" />
    <Picker.Item label="C" value="C" />
    <Picker.Item label="D" value="D" />
  </Picker>
  </Item>
  <Item floatingLabel>
          <Label>Obtained Marks</Label>
          <Input keyboardType='numeric'  onChangeText={val => setOmarks(val)} value={oMarks} placeholder="in kg"/>
    </Item>
    <Item floatingLabel>
          <Label>ToTal Marks</Label>
          <Input keyboardType='numeric'  onChangeText={val => setTmarks(val)} value={tMarks} placeholder="in kg"/>
    </Item>
  <View style={{borderBottomColor:"grey",borderBottomWidth:1,alignItems:"flex-start",marginTop:10,marginBottom:10}}>
        <Button transparent block onPress={showCalender} style={{color:"#000"}}>
          <Text style={{color:"#000"}}> Select Date Of Birth</Text>
          <Text style={{color:"#000",fontWeight:"600"}}>{new Date(date).toDateString()}</Text>
      </Button>
      {show && <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={mode}
      display="spinner"
      onChange={onChange}
         />}
   
      </View>

        <Button onPress={insertUser}  block dark style={{margin:20}}>
        <Text>POST RESUME</Text>
      </Button>
      </Form>
      </View>
      </ScrollView>     
    )

}

const styles = StyleSheet.create({
  thumbnail: {
    backgroundColor:"#d9dbdb",
    width: 130,
    height: 130,
    resizeMode: "cover",
    borderRadius:70,
    borderWidth:1,
    borderColor:"#858483",
    justifyContent:"center",
    alignItems:"center",
    opacity:1,
  },
  imagePicker:{
    backgroundColor:"#c2c2c2",
    padding:4,
    margin:8,
    borderRadius:10,
    opacity:0.6,
  },
  container:{
    width:280,
    height:350,
    position:"absolute",
    alignItems:"center",
    justifyContent:"center",
    padding:30

  },
  camera:{
    width:"100%",
    height:"100%",
    zIndex:100,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
  },
});
