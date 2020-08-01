import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

// import { Container } from './styles';

const btn = () => {
  return <View style={{width: 60, height: 60,backgroundColor:'#43B581', justifyContent:'center',alignItems:'center',borderRadius:30}}><MaterialCommunityIcons name="qrcode-scan" color="#fff" size={30}/></View>;
}

export default btn;