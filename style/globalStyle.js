import {StyleSheet} from 'react-native';


export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  donorCard:{
    margin:0,
    fontSize:12,
    color:'#000',
    padding:3,
    flex:1,
    flexDirection:"row",
  },
  mainHeading:{
    fontSize:32, color:"#000",textAlign:"center",textTransform:"uppercase",marginTop:30,padding:20
  },
  heading:{
    fontSize:20,
    color:"grey",
    marginBottom:5,
  },
  profile:{
    width:140,
    height:120,
    marginLeft:15,
    resizeMode:"cover"
  },
  comment:{
    color:"red",
    fontSize:12,
    textAlign:"center"
  },
  text:{
    fontSize:15,
    marginBottom:5,
  }
});
