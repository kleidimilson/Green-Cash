import React from 'react';
import { Text,StyleSheet, View,TextInput,TouchableOpacity,Image, Button} from 'react-native';
import {FontAwesome, AntDesign,Feather,MaterialCommunityIcons,Foundation} from '@expo/vector-icons';
import Scroll from '../../components/scroll/index';
import { useLinkProps } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


// import { Container } from './styles';

const Register = ({navigation}) => (
 
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={{alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize: 24, fontWeight:'bold', marginBottom: 15}}>Register</Text>
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
                <MaterialCommunityIcons name="email" color="#43B581" size={25} style={{marginRight: -35, zIndex:3, marginLeft:10}} />
                <TextInput textContentType="password" style={styles.input} placeholder="Email" placeholderTextColor="#5E5C5C"/>
              </View>
                <View style={{marginTop:10,flexDirection: 'row', alignItems:'center',borderColor: '#43B581',backgroundColor:'#fff',borderBottomWidth: 3, borderRadius: 15}}>
                <Feather name="lock" color="#43B581" size={25} style={{marginRight: -35, zIndex:3, marginLeft:10}} />
                <TextInput textContentType="password" style={styles.input} placeholder="password" placeholderTextColor="#5E5C5C"/>
              </View>
              <View style={{marginTop:10,flexDirection: 'row', alignItems:'center',borderColor: '#43B581',backgroundColor:'#fff',borderBottomWidth: 3, borderRadius: 15}}>
                <Feather name="lock" color="#43B581" size={25} style={{marginRight: -35, zIndex:3, marginLeft:10}} />
                <TextInput textContentType="password" style={styles.input} placeholder="Repeat password" placeholderTextColor="#5E5C5C"/>
              </View>
              <View style={{marginTop:10,flexDirection: 'row', alignItems:'center',borderColor: '#43B581',backgroundColor:'#fff',borderBottomWidth: 3, borderRadius: 15}}>
                <Foundation name="telephone" color="#43B581" size={25} style={{marginRight: -35, zIndex:3, marginLeft:10}} />
                <TextInput textContentType="password" style={styles.input} placeholder="Number" placeholderTextColor="#5E5C5C"/>
              </View>
              <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('TypeUser')}}>
                <Text style={{color: '#fff', fontWeight:'bold', fontSize:16}}>
                  Create Account
                </Text>
              </TouchableOpacity>
            
            </View>
         
        
        </View>
      </View>
 


  
    

  
)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#43B581',
      
    },
    header: {
      height: 222,
      backgroundColor: '#43B581',
     
      justifyContent: 'center',
      alignItems: 'center'
    },
    body: {
      backgroundColor:'#e5e5e5',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: 'center',
      marginTop: 0
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
      borderRadius: 12,
      marginBottom:20
    }

   
  })
 


export default Register;