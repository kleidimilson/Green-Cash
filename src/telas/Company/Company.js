import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import {Ionicons,FontAwesome5} from '@expo/vector-icons';
import Slide from '../../components/scroll/index';
import img1 from '../../images/arroz.png';
import img2 from '../../images/leite.png';
import img3 from '../../images/suco.png';
import img4 from '../../images/queijo.png';

// import { Container } from './styles';

const produtos  = [
    {
        "Key": 1,
        "name": 'Arroz',
        "Imagem": img1,
        "Order": '10,00',
        "Point": '100'
    },
    {
        "Key": 2,
        "name": 'Leite',
        "Imagem": img2,
        "Order": '10,00',
        "Point": '100'
    },
    {
        "Key": 3,
        "name": 'Suco',
        "Imagem": img3,
        "Order": '10,00',
        "Point": '100'
    },
    {
        "Key": 4,
        "name": 'Queijo',
        "Imagem": img4,
        "Order": '10,00',
        "Point": '100'
    }
]

const Company = ({navigation}) => {
  return(
      <View style={{flex:1, backgroundColor:'#e5e5e5'}}>
          <View style={styles.header}>
            <View style={styles.headerBody}>
                <Text style={{color:'#fff',fontWeight:'bold', fontSize:22}}>GreenTree</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}><Ionicons name="md-exit" color="#fff" size={30}/></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
                <FontAwesome5 name="industry" size={20} color="#fff"/>
                <Text style={{color:'#fff',fontWeight:'bold', fontSize:30, marginLeft:20}}>Company Ranking</Text>
            </View>
            
          </View>
         
        
          <ScrollView style={{marginTop: 10}}>
              <View style={{justifyContent:'center', alignItems:'center'}}>
               {produtos.map(produto =>(
                    <View style={styles.card} key={produto.Key}>
                        <Text></Text>
                    </View>
               ))
              
               }
              </View>
          </ScrollView>
      </View>
  )
}
const styles = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: '#43B581',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerBody:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:40,
        marginLeft: 20,
        marginRight: 20
    },
  
    botao: {
        borderWidth: 2,
        borderColor: '#fff',
        width: 100,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        marginLeft: 18,
        borderRadius: 18
    },
    card: {
        width: 380,
        borderRadius: 15,
        height: 90,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 0
    }
})
export default Company;