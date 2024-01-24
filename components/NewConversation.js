import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, TextInput, ScrollView} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Transfer from './Transfer';




const NewConversation = ()=>{
    const navigation = useNavigation();
    return(

<View>
                
        <ScrollView style={{ paddingVertical:10}} >

        


          
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:'#f4f4f4'}}>
            
            <View style={{ flexDirection:'row', position:'fixed', top:10, justifyContent: 'center', alignItems: 'center', gap:130}}>
            <Icons2 name="menu"  size={30} style={{color:'#3cb043'}}/>
            <Text style={{fontSize:25, fontWeight: 'bold'}}>Chat</Text>

            <View>
            <Image source={require('../assets/avatar2.jpg')} style={styles.img}/>
            <Text style={styles.Notification}>3</Text>
            </View>

            </View>
          




            <View style={{ elevation:5, width: 390, height: 130, marginTop:130, backgroundColor: 'white',paddingHorizontal:20, borderRadius:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <View>
            <Image source={require('../assets/avatar2.jpg')} style={styles.img2}/>
            </View>
        <Text style={{fontWeight:'bold', fontSize:18, marginLeft:15, marginTop:-85,  color:'gray'}} >Susie, Tech Support {'\n'}</Text> 
        <Text style={{fontSize:15,  fontWeight:400,marginTop:-30, marginLeft:-147,}}>Good Morning George!, How may i help you?</Text>

        </View>

        <View style={{ position:'absolute', top:100, left:50, flexDirection:'row', gap:20}}>
            <Text style={{fontWeight:'bold', fontSize:18,  color:'gray'}} >25/05/2019</Text>
            <Text style={{fontWeight:'bold', fontSize:18,  color:'gray'}} >09:45</Text>
        </View>

     
   
            
       
    </View>




    <View style={{ elevation:5, width: 390, height: 130, marginTop:50, backgroundColor: '#3cb043',paddingHorizontal:20, borderRadius:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center',}}>
     
        <Text style={{fontSize:15, color:'white',   fontWeight:400,marginTop:-60, marginLeft:27,}}>Hello Susie, Please Help me with Transfering{"\n"}Money to my Bank Account</Text>

        </View>

        <View style={{ position:'absolute', top:100, left:50, flexDirection:'row', gap:20}}>
            <Text style={{fontWeight:'bold', color:'white', fontSize:18,  }} >25/05/2019</Text>
            <Text style={{fontWeight:'bold', color:'white', fontSize:18, }} >09:59</Text>
        </View>

     
   
            
       
    </View>



    <View style={{marginTop:30}}>
<TextInput style={styles.input} placeholder='Enter Message'/>
</View>

<TouchableOpacity onPress={()=>navigation.navigate('NewConversation')}>
        <View style={styles.btn2}>
                    <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Send</Text>
                </View>
                </TouchableOpacity>







                
           


 





                


      
    
            </View>

            </ScrollView>
            <View 
    style={{ 
        flexDirection:'row', 
        marginTop:95,
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
        width:380,
        backgroundColor:'white',
        elevation:40,
        borderRadius:10
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
        bottom:60,
        width:50,
        height:50,
        borderRadius:50,
        justifyContent:'center',
        alignItems: 'center',
    },
})

export default NewConversation