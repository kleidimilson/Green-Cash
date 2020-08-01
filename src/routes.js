
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Login from './telas/Login/index'
import Register from './telas/Register/index'
import TypeUser from './telas/TypeUser/index'
import Menu from './telas/Home/Menu'

import {AntDesign, Ionicons,MaterialIcons} from '@expo/vector-icons';

const Stack = createStackNavigator();


export default function Routes(){

  return (
      <NavigationContainer>
        <Stack.Navigator  headerMode="none"  initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="TypeUser" component={TypeUser} />
            <Stack.Screen name="Menu" component={Menu}/>
        </Stack.Navigator>
     </NavigationContainer>
  );

  
}