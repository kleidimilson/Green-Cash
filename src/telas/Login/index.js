import React from 'react';
import { Text,StyleSheet, View,TextInput,TouchableOpacity,Image, Button} from 'react-native';
import {FontAwesome, AntDesign,Feather} from '@expo/vector-icons';
import Scroll from '../../components/scroll/index';
import { useLinkProps } from '@react-navigation/native';


// import { Container } from './styles';

const Login = ({navigation}) => (
 
  <View style={styles.container}>
      <View style={styles.header}>
        <View style={{alignItems:'center'}}>
          <Text style={{color:'#fff', fontSize:24, fontWeight: "bold", marginBottom: 15}}>Welcome!</Text>
          <FontAwesome name="tree" color="#fff" size={45}/>
        </View>
      </View>
      {
     // <Button  title="Navegar" onPress={() => navigation.navigate('Register')} />
      }
      <View style={styles.body}>
         
          <View style={styles.form}>
            <View style={{flexDirection: 'row', alignItems:'center',borderColor: '#43B581',backgroundColor:'#fff',borderBottomWidth: 3, borderRadius: 15}}>
              <AntDesign name="user" color="#43B581" size={25} style={{marginRight: -35, zIndex:3, marginLeft:10}} />
              <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#5E5C5C"/>
            </View>
            <View style={{marginTop:10,flexDirection: 'row', alignItems:'center',borderColor: '#43B581',backgroundColor:'#fff',borderBottomWidth: 3, borderRadius: 15}}>
              <Feather name="lock" color="#43B581" size={25} style={{marginRight: -35, zIndex:3, marginLeft:10}} />
              <TextInput textContentType="password" style={styles.input} placeholder="Password" placeholderTextColor="#5E5C5C"/>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Menu')}}>
              <Text style={{color: '#fff', fontWeight:'bold',fontSize:16}}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Register')}}>
              <Text style={{color: '#fff', fontWeight:'bold', fontSize:16}}>
                Create Account
              </Text>
            </TouchableOpacity>
           
          </View>
         <Text style={{marginTop:10,color:'#5E5C5C',fontWeight:'bold', fontSize:17}}>Forget Password?</Text>
           
        <View style={{flexDirection:'row', marginTop:10}}>
          <View style={{backgroundColor:'#fff',width:50,height:50,borderRadius:33, justifyContent:"center", alignItems:'center',marginRight:5}}>
            <FontAwesome name="facebook" color="#3C5A98" size={20}/>
          </View>
          <View style={{backgroundColor:'#fff',width:50,height:50,borderRadius:33, justifyContent:"center", alignItems:'center'}}>
            <FontAwesome name="google" color="#000" size={20}/>
          </View>
        </View>
      </View>
 </View>
     
  
    

  
)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e5e5e5',
      
    },
    header: {
      height: 242,
      backgroundColor: '#43B581',
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
    body: {
      alignItems: 'center',
      marginTop: 20
    },
    form:{
      marginTop: 30
    },
    input: {
      marginLeft: 40,
      height: 53,
      backgroundColor: '#fff',
      borderRadius: 12,
      width: 350,

    },
    btn: {
      backgroundColor: '#43B581',
      height: 60,
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12   
    }

   
  })
 


export default Login;