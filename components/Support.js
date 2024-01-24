import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, TextInput, ScrollView} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';




const Support = ()=>{
    const navigation = useNavigation();
    return(

        <View>

<ScrollView style={{ paddingVertical:10}} >
          
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:'#f4f4f4'}}>
            
            <View style={{marginTop:20, flexDirection:'row', justifyContent: 'center', alignItems: 'center', gap:130}}>
            <Icons2 name="menu"  size={30} style={{color:'#3cb043'}}/>
            <Text style={{fontSize:25, fontWeight: 'bold'}}>Chat</Text>

            <View>
            <Image source={require('../assets/avatar2.jpg')} style={styles.img}/>
            <Text style={styles.Notification}>3</Text>
            </View>

            </View>
            <Text style={{fontSize:16, marginTop:20}}>Good Morning</Text>
            <Text style={{fontWeight: 'bold', fontSize:20}}>George!</Text>

            <Text style={{position: 'absolute', top:150, left:25, fontWeight:'bold', fontSize:20}}>Your Active Conversations</Text>



            <View style={{ elevation:5, width: 390, height: 80, marginTop:80, backgroundColor: 'white',paddingHorizontal:20, borderRadius:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <View>
            <Image source={require('../assets/avatar2.jpg')} style={styles.img2}/>
            <Text style={styles.Notification2}></Text>
            </View>
        <Text style={{fontWeight:'bold', fontSize:18, marginLeft:20, marginTop:-15,  color:'gray'}} >Susie, Tech Support {'\n'}</Text> 
        <Text style={{fontSize:10,  fontWeight:400,marginTop:10, marginLeft:-147,}}>Good Morning George!, How may i help you?</Text>

        </View>

     
        <View style={styles.btn}>
                    <Text style={{color:'black', fontWeight:'bold', marginTop:-35, marginLeft:40, color:'gray'}}>2d ago</Text>
                </View>
            
       
    </View>




    <View style={{ elevation:5, width: 390, height: 80, marginTop:30, backgroundColor: 'white',paddingHorizontal:20, borderRadius:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <View>
            <Image source={require('../assets/avatar2.jpg')} style={styles.img2}/>
            <Text style={styles.Notification3}></Text>
            </View>
        <Text style={{fontWeight:'bold', fontSize:18, marginLeft:20, marginTop:-15,  color:'gray'}} >Charlotte, Tech Support {'\n'}</Text> 
        <Text style={{fontSize:10,  fontWeight:400,marginTop:10, marginLeft:-173,}}>Good Morning George!, How may i help you?</Text>

        </View>

     
        <View style={styles.btn}>
                    <Text style={{color:'black', fontWeight:'bold', marginTop:-35, marginLeft:40, color:'gray'}}>5d ago</Text>
                </View>
            
       
    </View>

    <TouchableOpacity onPress={()=>navigation.navigate('NewConversation')}>
        <View style={styles.btn2}>
                    <Text style={{color:'white', fontWeight:'bold'}}>New Conversation</Text>
                </View>
                </TouchableOpacity>




                
            <Text style={{ marginTop:20, marginRight:170, fontWeight:'bold', fontSize:20}}>Find an answer yourself</Text>


    
            <View style={{marginTop:5}}>
<TextInput style={styles.input} placeholder='Search For Articles...'   placeholderTextColor="#3cb043" />
</View>

    <TouchableOpacity>
        <View style={styles.btn2}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>Search</Text>
                </View>
                </TouchableOpacity>






    
            </View>
            </ScrollView>

                            

            <View 
    style={{ 
        flexDirection:'row', 
        marginTop:100,
         justifyContent:'space-between',
          gap:40, 
          alignItems:'center',
           backgroundColor:'#F7FCFB',
            width:'100%',
             height:'10%', 
              paddingHorizontal:20,
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              elevation:20,
             

            
              }}>

<TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
    <View>
        <Icons name="object-ungroup" size={25} /> 
        <Text style={{textAlign:'center'}}>Pay</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Transfer')}>
        <View>
        <Icons name="hands-helping" size={25} /> 
        <Text style={{textAlign:'center',marginLeft:-7}}>Transfer</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Balance')}>
        <View>
        <Icons2 name="credit-card-multiple" size={25} /> 
        <Text style={{textAlign:'center', marginLeft:-7}}>Balance</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View>
        <Icons2 name="chat-outline" size={25} style={{color:'#3cb043',}} /> 
        <Text style={{textAlign:'center', marginLeft:-7, color:'#3cb043'}}>support</Text>
        </View>
        </TouchableOpacity>


     <TouchableOpacity>
        <View>
        <Icons name="sun" size={25} /> 
        <Text style={{textAlign:'center', alignItems:'center', marginLeft:-7}}>settings</Text>
        </View>
        </TouchableOpacity>
  


    


</View>
      
            </View>
    )
}



const styles = StyleSheet.create({
    input: {
        height: 70,
        margin: 12,
        padding: 10,
        width:370,
        backgroundColor:'white',
        elevation:40,
        borderRadius:10,
      
      },

    btn2:{
    
        backgroundColor: '#8f94fb',
        width:250,
        height:50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
        marginTop:20
        
    },
    
    btn:{
    
        
        width:150,
        height:30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    
        
    },
    Notification:{
        position:'absolute', 
        right:0,
         left:25,
         top:-3,
         width:20,
          height:20, 
         backgroundColor:'#3cb043',
          justifyContent:'center',
           alignItems: 'center',
            textAlign: 'center', 
            color:'white',
             borderRadius:50
        
    },

    Notification3:{
        position:'absolute', 
        right:0,
         left:30,
         top:-5,
         width:20,
          height:20, 
         backgroundColor:'gray',
          justifyContent:'center',
           alignItems: 'center',
            textAlign: 'center', 
            color:'white',
             borderRadius:50
        
    },



    Notification2:{
        position:'absolute', 
        right:0,
         left:32,
         top:-5,
         width:20,
          height:20, 
         backgroundColor:'#3cb043',
          justifyContent:'center',
           alignItems: 'center',
            textAlign: 'center', 
            color:'white',
             borderRadius:50
        
    },


    img:{
        width:35,
        height:35,
        borderRadius:50,
        justifyContent:'center',
        alignItems: 'center',
    },

    img2:{
        width:45,
        height:45,
        borderRadius:50,
        justifyContent:'center',
        alignItems: 'center',
    },
})

export default Support