import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';


const Home = ({navigation})=>{
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#f4f4f4'}}>

            <View style={{marginTop:50}}>
            <Image source={require('../assets/logo.jpg')} style={styles.logo}/>

            </View>

            <View style={{paddingVertical:20, alignItems:'center'}}>
                <Text style={{paddingVertical:20, fontWeight:'bold', fontSize:18}}>Welcome back, George!</Text>
                <Text style={{fontSize:15, fontWeight:500,  }}>Not You?   <Text style={{color:'#3cb043', fontWeight:600 }}>Switch Account</Text></Text>
            </View>


            <View style={{ alignItems:'center'}}>
                <Text style={{marginTop:70, fontWeight:'bold', fontSize:20, textAlign:'center', justifyContent: 'center'}}>Enter your Pin</Text>

                <View style={{marginTop:20, }}>
                <Text style={{paddingHorizontal:10, letterSpacing:5, color:'#3cb043', }}>  *    *   6 </Text>
                <Text style={{paddingHorizontal:10, color:'#3cb043', marginTop:-7}}> ______  ______  ______   <Text style={{color:'black'}}>______  ______  ______ </Text> </Text>

                </View>


                <TouchableOpacity>
                <View style={styles.btn}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Authorize</Text>
                </View>
                </TouchableOpacity>

                
                <Text style={{fontSize:15, fontWeight:500, marginTop:40  }}>Forgot Pin?   <Text style={{color:'#3cb043', fontWeight:600 }}>Reset Account</Text></Text>

               
            </View>



            <View 
    style={{ 
        flexDirection:'row', 
        marginTop:215,
         justifyContent:'space-between',
          alignItems:'center',
           backgroundColor:'#F7FCFB',
            width:'100%',
             height:'10%', 
              paddingHorizontal:100,
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              elevation:20,
             

            
              }}>


                    <TouchableOpacity onPress={()=>navigation.navigate('TouchId')}>

                <View style={{ right:80, flexDirection:'row',}} >
                <Icons2 name="fingerprint" size={30} style={{color:'#3cb043'}}/>
                <Text style={{fontSize:15, paddingVertical:7, fontWeight:'bold'}}>Activate Touch ID</Text>
            </View>
            </TouchableOpacity> 


            <TouchableOpacity >
            <View style={{ left:80, flexDirection:'row'}} >
            <Text  style={{fontSize:15, paddingVertical:7, fontWeight:'bold'}}>Need Help?</Text>
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


export default Home