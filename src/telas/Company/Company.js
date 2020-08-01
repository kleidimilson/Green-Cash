import React,{useState, useEffect} from 'react';
import api from '../../services/api';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native';
import {Ionicons,FontAwesome5} from '@expo/vector-icons';
import Slide from '../../components/scroll/index';
import img1 from '../../images/fabrica.png';
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
  
  const [fabricas,setFabrica] = useState([]);

  useEffect(()=>{
    async function loadFabricas(){
        const response = await api.get('/fabrica');
        setFabrica(response.data)
     }
     loadFabricas();
    })
  
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
                <View style={styles.card}>

                    <Text style={{color: '#43b581',fontSize:15, fontWeight:'bold'}}>Conheças as empresas que mais doaram cash back</Text>
                </View>
               {fabricas.map(fabrica =>(
                    <View style={styles.card} key={fabrica.id}>
                        <View style={styles.cardHeader}>
                                <Image style={styles.imagens} source={img1} />
                                <View style={{marginLeft:10}}>
                                    <Text style={{fontSize:18, fontWeight:'bold'}}>{fabrica.name}</Text>
                                   <Text style={{fontSize:16, fontWeight: 'bold',color:'#a5a5a5'}}>{fabrica.category}</Text>
                                </View>
                        </View>
                        <TouchableOpacity style={styles.btn}><Text style={{fontSize:14, fontWeight:'bold', color:'#fff'}}>Vizualizar</Text></TouchableOpacity>
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
        height: 60
    },
    cardHeader: {
        flexDirection:'row'
    },
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
    btn: {
        width:100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#43b581',
        borderRadius: 14
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
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
})
export default Company;