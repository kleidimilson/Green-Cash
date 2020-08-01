import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const TypeUser = ({navigation}) => {
  return(
      <>
        <View style={{flex:1, backgroundColor:'#43B581', alignItems:'center'}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:30,marginTop:250}}>
              How you want to register?
            </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Menu')}} style={{backgroundColor:'#fff',height:60,width:300,borderRadius:12, justifyContent:'center',alignItems:'center',marginTop:30}}>
              <Text style={{color:'#43B581',fontSize:18,fontWeight:'bold'}}>User</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('Menu')}}  style={{backgroundColor:'#fff',height:60,width:300,borderRadius:12, justifyContent:'center',alignItems:'center',marginTop:20}}>
              <Text style={{color:'#43B581',fontSize:18,fontWeight:'bold'}}>Ong</Text>
            </TouchableOpacity>
        </View>
      </>
  )
}

export default TypeUser;