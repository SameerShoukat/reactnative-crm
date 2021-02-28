import React from 'react';
import { StyleSheet, View ,Image,TouchableOpacity, Alert,ActivityIndicator,ScrollView} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button,Text,Grid,Col,Picker } from 'native-base';
import { useState,useEffect } from 'react';
import firebase from  '../config/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../../style/globalStyle';

export default function Login({ navigation } ){
    const [logEmail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');
    const [SIaccountType, setSIaccountType] = useState('');


    const[userData , setUserData]=useState({});
    const [showSignIn, setShowSignIn]=useState(true);
    const [showSignUp, setShowSignUp]=useState(false);
    const [loading, setLoading] =  useState(true)
   
   
    useEffect(()=>{
     // getData();
     setLoading(false)
    },[])
   
    const showSignUpButton = async()=>{
      <ActivityIndicator size="large"/>
     await setShowSignUp(true)
     setShowSignIn(false)
    }
   

    const  showSignInButton = async()=>{
      <ActivityIndicator size="large"/>
     await setShowSignIn(true)
     setShowSignUp(false)
    }

    /*Sign In*/
    const signIn =async ()=>{  
      if(logEmail.trim()===""){
        Alert.alert("Please enter Email")
      } 
      else if(logPassword.trim() == ""){
        Alert.alert("Please enter Password")
      }
      else if(SIaccountType.trim() == ""){
        Alert.alert("Please select acccount type")
      }
      else{
        setLoading(true)
        var makingKey = logEmail.replace('.','')
        firebase.database().ref('/users/').once('value').then((snapshot) => {
            if (snapshot.child(makingKey).val()) {
                console.log(snapshot.child(makingKey).val())
               firebase.database().ref('/users/' + makingKey).once('value').then((snapshot) => {
                if( logEmail != snapshot.val().email){
                    alert("email is not correct")
                }
                else if(logPassword != snapshot.val().password){
                    alert("password is not correct")
                }
                else if(SIaccountType != snapshot.val().accountType){
                    alert("account type is not correct")
                }
                else{
                    setLogEmail('');
                    setLogPassword('');
                    navigation.navigate('Home',{SIaccountType});
                    setLoading(false)
                }   
                })
            }
        })
  //storeData(userCredential.user)
  
}
}


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [SUaccountType, setSUaccountType] = useState('');
let insertUser = ()=>{
  if(email.trim() === ""){
     Alert.alert('Please Enter Email Address')
   }
   else if(password.trim() === ""){
     Alert.alert('Please Enter Password')
   }
   else if(confirmPassword.trim() === ""){
     Alert.alert("Please Enter Confirm Passwrod")
   }
   else if( password != confirmPassword){
     Alert.alert("password not match")
   }
   else if(SUaccountType.trim() == ""){
    Alert.alert("Please select account type")
  }
   else{
       var makingKey = email.replace('.','')
       firebase.database().ref('/users/').once('value').then((snapshot) => {
        if (snapshot.child(makingKey).val()) {    
            alert('Email Exit As User')
        }
        else{   
       var users = {
        email: email,
        password : password,
        accountType : SUaccountType
       }
    firebase.database().ref('users/'+ makingKey).set(users)
    }
    })
    alert("Account Has Been Created")
    showSignInButton()
   }
}




   


const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@college_key', jsonValue)
  } catch (e) {
    // saving error
  }
}
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@college_key')
    if(jsonValue != null){
      navigation.navigate('Home')
    }
    else{
      setLoading(false)
    }     
  } catch(e) {
    // error reading value
  }
}


if (loading) {
  return (
    <View style={{backgroundColor:"#fff",flex:1, justifyContent:"center",alignItems:'center'}}>
      <Image source={require('../../assets/loading.gif')} style={{width:200,height:200,resizeMode:"contain"}}/>
    </View>
  );
}
else if (!loading){

  if(showSignIn){
    return(
      <ScrollView style={{display:"flex", flex:1,backgroundColor:"#fff"}}>
        <View Style={{flex:1}}>
        <View style={{backgroundColor:"none",flex:1, justifyContent:"center",alignItems:'center',alignSelf:"center"}}>
            <Text style={globalStyles.mainHeading}  >Superior College Of Pakistan</Text>
        </View>
          <Form>     
        
        <Item floatingLabel last>
            <Label>Company/Student/Admin Email</Label>
            <Input keyboardType='email-address'  onChangeText={val => setLogEmail(val)} value={logEmail} />
          </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={text=> setLogPassword(text)} value={logPassword}  style={{marginBottom:10}} />
            </Item>
            <View style={{color:"#000",display:"flex",justifyContent:"center",alignItems:'center',margin:20,flexDirection:"row"}}>
              <Label style={{flex:1}}>Select Account Type</Label>
          <Picker
             selectedValue={SIaccountType}
              style={{ height: 50, width: 250,right:0, borderWidth: 1, borderColor: 'red', borderRadius: 4,flex:1 }}
              onValueChange={(itemValue, itemIndex) => {setSIaccountType(itemValue)}}
        >
          <Picker.Item label="select Account type" value=" " color="#047594" />
          <Picker.Item label="Admin" value="Admin"  color="#047594" />
          <Picker.Item label="Company" value="Company"  color="#047594" />
          <Picker.Item label="Student" value="Student"  color="#047594" />
        </Picker>  
         </View>   
            <Button block  style={{marginBottom:20,backgroundColor:"#4c2899"}} onPress={signIn}  style={{margin:20}}>
            <Text>Sign In</Text>
          </Button>
          </Form>
          <TouchableOpacity activeOpacity={0.8} style={{flex:1,flexDirection:"row",justifyContent:"center",padding:10}} onPress={showSignUpButton} >
            <Text>click here to <Text style={{color:"purple",fontSize:18,padding:10}}>Sign Up</Text></Text>
            </TouchableOpacity>
            </View>
          </ScrollView>
    )
  }

  if(showSignUp){
  return(
    <ScrollView style={{flex:1,backgroundColor:"#fff"}}>
    <View Style={{flex: 1}}>
    <View style={{backgroundColor:"none",flex:1, justifyContent:"center",alignItems:'center'}}>
    <Text style={globalStyles.mainHeading}  >Superior College Of Pakistan</Text>
        </View>
        <Form>
          <Item floatingLabel last>
            <Label>Company/Student/Admin Email</Label>
            <Input keyboardType='email-address'  onChangeText={val => setEmail(val)} value={email} />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} onChangeText={val => setPassword(val)} value={password}/>
          </Item>
          <Item floatingLabel last>
            <Label>confirm Password</Label>
            <Input secureTextEntry={true}  onChangeText={val => setConfirmPassword(val)} value={confirmPassword}/>
          </Item>  
          
          <View style={{color:"#000",display:"flex",justifyContent:"center",alignItems:'center',margin:20,flexDirection:"row"}}>
              <Label style={{flex:1}}>Select Account Type</Label>
          <Picker
             selectedValue={SUaccountType}
              style={{ height: 50, width: 250,right:0, borderWidth: 1, borderColor: 'red', borderRadius: 4,flex:1 }}
              onValueChange={(itemValue, itemIndex) => {setSUaccountType(itemValue)}}
        >
          <Picker.Item label="select Account type" value=" " color="#047594" />
          <Picker.Item label="Admin" value="Admin"  color="#047594" />
          <Picker.Item label="Company" value="Company"  color="#047594" />
          <Picker.Item label="Student" value="Student"  color="#047594" />
        </Picker>  
         </View>  
          
          <Button block style={{marginBottom:20, backgroundColor:"#153a5c"}} onPress={insertUser}   style={{margin:20}}>
          <Text>Sign Up</Text>
        </Button>
        
        </Form>
        <TouchableOpacity activeOpacity={0.8} style={{flex:1,flexDirection:"row",justifyContent:"center",padding:10}} onPress={showSignInButton} >
            <Text>click here to <Text style={{color:"purple",fontSize:18,padding:10}}>Sign In</Text></Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
  )
}
}
}





