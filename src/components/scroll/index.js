import React from 'react';
import { View,ScrollView,Text, TouchableOpacity,Image, StyleSheet } from 'react-native';

import img1 from '../../images/01.png'
import img2 from '../../images/02.png'
import img3 from '../../images/03.png'
import img4 from '../../images/04.png'
import img5 from '../../images/05.png'

// import { Container } from './styles';


const itens = [
    
    {
      "key": "1",
      "nome": "Ong I",
      "img": img1
    },
   {
      "key": "2",
      "nome": "Ong II",
      "img": img2
    },
    {
      "key": "3",
      "nome": "Ong III",
      "img": img3
    },
    {
      "key": "4",
      "nome": "Ong IV",
      "img": img4
    },
    {
      "key": "5",
      "nome": "Ong V",
      "img": img5
    },
     
   
]
const Scroll = () => (
  <View style={{height: 120, backgroundColor: '#fff', justifyContent: 'center', alignItems:'center', marginTop: 10,   marginTop: 20, marginBottom: 20,paddingBottom:10,paddingTop:18}}>
    <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
        {
           itens.map(item => (
               
                 <TouchableOpacity  key={item.key} style={styles.item}>
                    <Image style={styles.img} source={item.img} />
                    <Text style={styles.texto}>{item.nome}</Text>
                 </TouchableOpacity>
          
           ))
        }
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  
    item: {
       borderColor:'#43B581',
       borderWidth:3,
        marginLeft: 10,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 19,
        borderRadius: 20,
        backgroundColor: '#fff',
        height: 90,
        width: 90,
        
        
              
    },
    texto: {
      
        color: '#5E5C5C',
        fontWeight: 'bold'
    },
    img: {
  
      borderRadius: 30,
      marginTop:16,
      width: 50,
      height: 50,
      
    }
})
  


export default Scroll;