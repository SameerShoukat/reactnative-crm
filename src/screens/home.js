import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native';


export default function Home({route,navigation}){
    const data = route.params


if(data.SIaccountType === "Student"){
    return(
    <ScrollView style={{color:"#fff"}}>
    <View style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center", marginTop:50}}>
    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} activeOpacity={0.7}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>Post Your Academic Detail</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} activeOpacity={0.7}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>view vacancies</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    )
}
if(data.SIaccountType === "Company"){
    return(
    <ScrollView style={{color:"#fff"}}>
    <View style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center", marginTop:50}}>
    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} activeOpacity={0.7}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>Post Your Vacancies</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} activeOpacity={0.7}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>Pass Out Student List</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    )
}
if(data.SIaccountType === "Admin"){
    return(
    <ScrollView style={{color:"#fff"}}>
    <View style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center", marginTop:50}}>
    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} activeOpacity={0.7}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>View Student Post</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} activeOpacity={0.7}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>View Job Vacancies</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    )
}





}