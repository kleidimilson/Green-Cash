import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native';
import {Ionicons,FontAwesome5} from '@expo/vector-icons';

import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';

// import { Container } from './styles';

const produtos  = [
    {
        "Key": 1,
        "name": 'Ong I',
        "Imagem": img1,
        "meta": '250',
        
    },
    {
        "Key": 2,
        "name": 'Ong II',
        "Imagem": img2,
        "meta": '310',
        
    },
    {
        "Key": 3,
        "name": 'Ong III',
        "Imagem": img3,
        "meta": '100'
    },
    {
        "Key": 4,
        "name": 'Ong IV',
        "Imagem": img4,
        "meta": '200'
    }
]

const Donate = ({navigation}) => {
  const [num, setNum] = useState(250);
  function somar(){
    setNum(num+1)
   }
    function diminuir(){
        setNum(num-1)
    }
  return(
      <View style={{flex:1, backgroundColor:'#e5e5e5'}}>
          <View style={styles.header}>
            <View style={styles.headerBody}>
                <Text style={{color:'#fff',fontWeight:'bold', fontSize:22}}>GreenTree</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}><Ionicons name="md-exit" color="#fff" size={30}/></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', margin:20}}>
                <FontAwesome5 name="tree" size={20} color="#fff"/>
                <Text style={{color:'#fff',fontWeight:'bold', fontSize:30, marginLeft:10}}>Donate</Text>
            </View>
            
          </View>
         
        
          <ScrollView style={{marginTop: 10}}>
              <View style={{justifyContent:'center', alignItems:'center'}}>
               {produtos.map(produto =>(
                    <View style={styles.card} key={produto.Key}>
                        <View style={styles.cardHeader}>
                                <Image style={styles.imagens} source={produto.Imagem} />
                                <View style={{marginLeft:10}}>
                                    <Text style={{fontSize:18, fontWeight:'bold'}}>{produto.name}</Text>
                                    <Text style={{fontSize:18, fontWeight:'bold', color:'#43b581'}}>Meta: {produto.meta}</Text>
                                  
                                </View>
                        </View>

                        <View style={{flexDirection:'row',width:140,justifyContent:'space-between',alignItems:'center'}}>
                            <TouchableOpacity style={styles.btn} onPress={diminuir}><Text style={{fontSize:14, fontWeight:'bold', color:'#fff'}}>-</Text></TouchableOpacity>
                                 <Text>{num}</Text>
                            <TouchableOpacity style={styles.btn} onPress={somar}><Text style={{fontSize:14, fontWeight:'bold', color:'#fff'}}>+</Text></TouchableOpacity>
                        </View>
                        
                    </View>
               ))
              
               }
              </View>
          </ScrollView>
      </View>
  )
}
const styles = StyleSheet.create({
    imagens: {
        width: 60,
        height: 60,
        paddingLeft: 15
    },
    btn: {
        width:50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#43b581',
        borderRadius: 10
    },
    header: {
        height: 200,
        backgroundColor: '#43B581',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    cardHeader: {
        flexDirection:'row',
        alignItems:'center'
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
        marginTop: 0,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 10
    }
})
export default Donate;