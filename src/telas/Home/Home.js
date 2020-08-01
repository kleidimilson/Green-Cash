import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView, Image} from 'react-native';
import {Ionicons,FontAwesome5} from '@expo/vector-icons';
import Slide from '../../components/scroll/index';
import img1 from '../../images/arroz.png';
import img2 from '../../images/leite.png';
import img3 from '../../images/suco.png';
import img4 from '../../images/queijo.png';

// import { Container } from './styles';

const produtos  = [
    {
        "key": 1,
        "name": 'Arroz',
        "img": img1,
        "order": '10,00',
        "point": '100'
    },
    {
        "key": 2,
        "name": 'Leite',
        "img": img2,
        "order": '10,00',
        "point": '100'
    },
    {
        "key": 3,
        "name": 'Suco',
        "img": img3,
        "prder": '10,00',
        "point": '100'
    },
    {
        "Key": 4,
        "name": 'Queijo',
        "img": img4,
        "order": '10,00',
        "point": '100'
    }
]

const Home = ({navigation}) => {
  return(
      <View style={{flex:1, backgroundColor:'#e5e5e5'}}>
          <View style={styles.header}>
            <View style={styles.headerBody}>
                <Text style={{color:'#fff',fontWeight:'bold', fontSize:22}}>GreenTree</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}><Ionicons name="md-exit" color="#fff" size={30}/></TouchableOpacity>
            </View>
            <View style={styles.pontos}>
                <FontAwesome5 name="coins" size={20} color="#fff"/>
                <Text style={{color:'#fff',fontWeight:'bold', fontSize:36}}>250</Text>
            </View>
            <TouchableOpacity style={styles.botao}>
                <Text style={{color:'#fff', fontSize: 18}}>Donate</Text>
            </TouchableOpacity>
          </View>
          <Slide/>
          <ScrollView style={{marginTop: 10}} showsVerticalScrollIndicator={false}>
            <Text style={{fontSize:17, fontWeight: "bold", color:'#5E5C5C', marginLeft: 10}}>Today</Text>
            
                <View style={{justifyContent:'center', alignItems:'center'}}>
                {produtos.map(produto =>(
                        <View style={styles.card} key={produto.Key}>
                        <View style={styles.cardHeader}>
                                <Image style={styles.imagens}source={produto.img} />
                                <View style={{marginLeft:10}}>
                                    <Text style={{fontSize:18, fontWeight:'bold'}}>{produto.name}</Text>
                                    <Text style={{fontSize:16, fontWeight: 'bold',color:'#a5a5a5'}}>Order: {produto.order}</Text>
                                </View>
                        </View>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'#43B581'}}>+{produto.point}</Text>
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
    pontos: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:90,
        marginTop: 10,
        marginLeft:20
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
        padding: 10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
        
    },
    imagens: {
        width: 60,
        height: 60
    },
    cardHeader: {
        flexDirection:'row'
    }
})
export default Home;