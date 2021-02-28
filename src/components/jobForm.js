import React,{useEffect} from 'react';
import { StyleSheet, View ,Image,TouchableOpacity,ScrollView,ActivityIndicator, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button,Text,Grid,Col,Picker,Icon } from 'native-base';
import { useState } from 'react';
import firebase from  '../config/index';
import {globalStyles} from '../../style/globalStyle'


export default function JobForm(){
    

  const ref =firebase.firestore();

    const [jobTitle, setJobTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber]=useState('');
    const [companyName , setcompanyName] = useState('');
    const[address , setAddress] = useState('');
    const [salary, setSalary] = useState('')


   let insertJob = ()=>{
    if(jobTitle.trim() === ""){
      Alert.alert('Fullname Required')
    }
    else if(email.trim() === ""){
     Alert.alert('Email Required')
   }
   else if(phoneNumber.trim() === ""){
     Alert.alert('Phone Number Required')
   }
   else if(companyName.trim() === ""){
     Alert.alert('Company name Required')
   }
   else if(address.trim() === ""){
     Alert.alert('adress required')
   }
   else if(salary.trim() === ""){
    Alert.alert('salaray required Required')
  }
 
   else{
    const key = ref.collection("job_posts").doc().id
   ref.collection(`job_posts`).doc().set({
     title : jobTitle,
     email : email,
     phoneNumber : phoneNumber,
     company : companyName,
     address: address,
     salary : salary,
     key:key
   })
    Alert.alert("Job Posted......")
   setJobTitle('');
   setEmail('');
   setPhoneNumber('');
   setcompanyName('');
   setSalary('');
   setAddress('')
   //setImage(null)
 }
 }

    return(
<ScrollView>
    <View>
        <Text style={globalStyles.mainHeading}>POST JOB</Text>
        <Form>
        <Item floatingLabel last>
          <Label>Job Title</Label>
          <Input onChangeText={val => setJobTitle(val)} value={jobTitle} />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input keyboardType="email-address"  onChangeText={val => setEmail(val)} value={email}/>
        </Item>
        <Item floatingLabel>
          <Label>Phone Number</Label>
          <Input keyboardType='numeric'  onChangeText={val => setPhoneNumber(val)} value={phoneNumber}/>
        </Item>
  <Item floatingLabel>
          <Label>Company Name</Label>
          <Input  onChangeText={val => setcompanyName(val)} value={companyName}/>
    </Item>
    <Item floatingLabel>
          <Label>Address</Label>
          <Input  onChangeText={val => setAddress(val)} value={address}/>
    </Item>
    <Item floatingLabel>
          <Label>Salary</Label>
          <Input  onChangeText={val => setSalary(val)} value={salary}/>
    </Item>
        <Button onPress={insertJob}  block dark style={{margin:20}}>
        <Text>Post</Text>
      </Button>
      </Form>
      </View>
      </ScrollView>     



    )

}