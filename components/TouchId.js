import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';


const TouchId = ({navigation})=>{
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#f4f4f4'}}>

         

            <View   style={{position: 'absolute',top:30, left:30, flexDirection:'row', alignItems: 'center'}}>
            <TouchableOpacity  onPress={navigation.goBack}>
                <Icon name="arrow-back-ios" size={20} style={{color:'#3cb043'}}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={navigation.goBack}>
                <Text  style={{color:'#3cb043', fontWeight:'bold', fontSize:15}}>Back</Text>
                </TouchableOpacity>
            </View>
          

            <View style={{marginTop:-150}}>
            <Image source={require('../assets/logo.jpg')} style={styles.logo}/>

            </View>

            <View style={{marginTop:100, alignItems:'center'}}>
            <Icons2 name="fingerprint" size={80} style={{color:'#3cb043'}}/>
            </View>


            <View style={{ alignItems:'center'}}>
                <Text style={{marginTop:30, fontWeight:'bold', fontSize:20, textAlign:'center', justifyContent: 'center'}}>Login with Touch ID</Text>
                <Text style={{marginTop:15, fontSize:10,   textAlign:'center', justifyContent: 'center'}}>Lorem ipsum dolor sit amet, elit.sciunt nihil aut cupiditate. {'\n'}  ducimus voluptates voluptas?</Text>

            


                <TouchableOpacity>
                <View style={styles.btn}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Turn on Touch ID</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
                <Text style={{marginTop:35, fontWeight:'bold'}}>Skip</Text>
                </TouchableOpacity>
            </View>



                <View style={{position:'absolute', bottom:50, flexDirection:'row', justifyContent: 'space-between' }}>


                    {/* <TouchableOpacity >

                <View style={{ right:80, flexDirection:'row', gap:5}} >
                <Icons2 name="fingerprint" size={30} style={{color:'#3cb043'}}/>
                <Text style={{fontSize:15, paddingVertical:7, fontWeight:'bold'}}>Activate Touch ID</Text>
            </View>
            </TouchableOpacity>  */}


            <TouchableOpacity>
            <View style={{ left:130, flexDirection:'row', gap:5}} >
            <Text  style={{fontSize:15, paddingVertical:7, fontWeight:'bold'}}>Need Help ?</Text>
                <Icons2 name="chat" size={30} style={{color:'#3cb043'}}/>
              
            </View>
            </TouchableOpacity> 


              </View>

         
          
          
         

            </View>
    )
}


const styles = StyleSheet.create({
    logo:{
        width:70,
        height:70,
        borderRadius:50
    },
    btn:{
        marginTop:80,
        backgroundColor: '#8f94fb',
        width:250,
        height:50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
        
    }
})


export default TouchId