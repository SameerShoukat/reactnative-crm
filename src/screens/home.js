import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ScrollView,ImageBackground } from 'react-native';
import { globalStyles } from '../../style/globalStyle';


export default function Home({route,navigation}){
    const data = route.params.myValue == null ? route.params.SIaccountType : route.params.myValue.accountType


    const studentForm =()=>{
      navigation.navigate('studentForm')
    }
    const jobPost = ()=>{
      navigation.navigate('jobPost',{forAdmin:false})

    }
    const jobForm = ()=>{
      navigation.navigate('jobForm')

    }
    const AcademicPost =()=>{
      navigation.navigate('AcademicPost',{forAdmin:false})
    }
    const AcademicPostAdmin = ()=>{
      navigation.navigate('AcademicPost',{forAdmin:true})

    }
    const jobPostAdmin =()=>{
      navigation.navigate('jobPost',{forAdmin:true})

    }

if(data === "Student"){
    return(
      <ImageBackground source={require('../../assets/bg.png')} style={styles.image}>
    <ScrollView style={{color:"#fff",flex:1}}>
    <View style={{backgroundColor:"none",flex:1, justifyContent:"center",alignItems:'center',alignSelf:"center"}}>
            <Text style={{color:"#fff",fontSize:22,marginTop:50,textTransform:"uppercase",padding:10,textAlign:"center"}}>Superior College Of Pakistan</Text>
        </View>
    <View style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",marginTop:20}}>
    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} onPress={studentForm} activeOpacity={0.7}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>Post Your Academic Detail</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} onPress={jobPost} activeOpacity={0.7}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>view vacancies</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    </ImageBackground>
    )
}
if(data === "Company"){
    return(
      <ImageBackground source={require('../../assets/bg.png')} style={styles.image}>
    <ScrollView style={{color:"#fff"}}>
    <View style={{backgroundColor:"none",flex:1, justifyContent:"center",alignItems:'center',alignSelf:"center"}}>
            <Text style={{color:"#fff",fontSize:22,marginTop:50,textTransform:"uppercase",padding:10,textAlign:"center"}}>Superior College Of Pakistan</Text>
        </View>
    <View style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",marginTop:20}}>
    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} onPress={jobForm} activeOpacity={0.7}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>Post Your Vacancies</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} onPress={AcademicPost} activeOpacity={0.7}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>Pass Out Student List</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    </ImageBackground>
    )
}
if(data === "Admin"){
    return(

      <ImageBackground source={require('../../assets/bg.png')} style={styles.image}>
    <ScrollView style={{color:"#fff"}}>
          
    <View style={{backgroundColor:"none",flex:1, justifyContent:"center",alignItems:'center',alignSelf:"center"}}>
            <Text style={{color:"#fff",fontSize:22,marginTop:50,textTransform:"uppercase",padding:10,textAlign:"center"}}>Superior College Of Pakistan</Text>
        </View>
    <View style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",marginTop:20}}>
    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} onPress={AcademicPostAdmin} activeOpacity={0.7}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>View Student Post</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{padding:15,backgroundColor:"#554478", width:220, height:170,justifyContent:"center",alignItems:"center",margin:20,borderWidth:5, borderColor:"grey"}} activeOpacity={0.7} onPress={jobPostAdmin}>
      <Text style={{color:'#fff',alignSelf:"center",fontSize:20,textAlign:"center",textTransform:"uppercase"}}>View Job Vacancies</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    </ImageBackground>
    )
}

}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
})