import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, TextInput,ScrollView, } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';




const Transfer = ()=>{
    const navigation = useNavigation();
    return(

        <View>

        
        <ScrollView style={{ paddingVertical:10}} >
        
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:'#f4f4f4'}}>
            
            <View style={{position:'sticky', top:30, flexDirection:'row', justifyContent: 'center', alignItems: 'center', gap:80}}>
            <Icons2 name="menu"  size={30} style={{color:'#3cb043'}}/>
            <Text style={{fontSize:25, fontWeight: 'bold'}}> Money Transfer</Text>

            <View>
            <Image source={require('../assets/avatar2.jpg')} style={styles.img}/>
            <Text style={styles.Notification}>3</Text>
            </View>

            </View>


            <View style={{position:'absolute', top:100,  width:'100%', paddingHorizontal:25}}>
<Text style={{  fontWeight:'bold', fontSize:20,  }}>Bank Name</Text>

</View>



<View style={{marginTop:110, flexDirection:'row', justifyContent:'center', gap:23, alignItems:'center', }}>

    <TouchableOpacity>
    <View style={{width:180, backgroundColor:'white', height:50, justifyContent:'center', alignItems:'center', flexDirection:'row', gap:7, elevation:30}}>
    <Icon name="person-outline" size={25} /> 
        <Text style={{fontSize:18, fontWeight:'bold'}}>Person</Text>
    </View>


    </TouchableOpacity>

   

    <TouchableOpacity>
    <View style={{width:180, backgroundColor:'#3cb043', height:50, alignItems:'center', justifyContent:'center', flexDirection:'row', gap:7,  elevation:30}}>
    <Icon name="house" size={25}  style={{color:'white'}}/> 
        <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>Bank</Text>
    </View>
    </TouchableOpacity>





</View>

<View style={{marginTop:30, flexDirection:'row', justifyContent:'space-between', width:'100%', paddingHorizontal:25}}>
<Text style={{  fontWeight:'bold', fontSize:20,  }}>Bank Name</Text>
<Icons2 name="checkbox-marked-circle"  size={20} style={{color:"#3cb043"}}/>

</View>





<View style={{marginTop:20, width:380, backgroundColor:'white', height:70, alignItems: 'center', paddingHorizontal:20,   elevation:30, flexDirection:'row', justifyContent: 'space-between'}}>
    <Image source={require('../assets/firstbank.png')} style={{width:120, height:50}}/>
  
        <Text style={{fontSize:18, fontWeight:'bold'}}>FirstBank Nigeria</Text>
        <Icon name="keyboard-arrow-down" size={20}/>
    </View>


    <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-between', width:'100%', paddingHorizontal:28}}>
<Text style={{  fontWeight:'bold', fontSize:20,  }}>Account Number</Text>
<Icons2 name="checkbox-marked-circle"  size={20} style={{color:"#3cb043"}}/>

</View>

<View>
<TextInput style={styles.input} placeholder='Enter Account Number'/>
</View>


<View style={{marginTop:15, flexDirection:'row', justifyContent:'space-between', width:'100%', paddingHorizontal:28}}>
<Text style={{  fontWeight:'bold', fontSize:20,  }}>Amount ( ₦)</Text>
<Icons2 name="checkbox-marked-circle"  size={20} style={{color:"#3cb043"}}/>

</View>


<View>
<TextInput style={styles.input}  placeholder='Enter Amount'/>
</View>




<View style={{marginTop:15, flexDirection:'row', justifyContent:'space-between', width:'100%', paddingHorizontal:28}}>
<Text style={{  fontWeight:'bold', fontSize:20,  }}>Message (Optional)</Text>
<Icons2 name="checkbox-marked-circle"  size={20} style={{color:"gray"}}/>

</View>

<View>
<TextInput style={styles.input} placeholder='Enter Message'/>
</View>
         


<TouchableOpacity>
        <View style={styles.btn2}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>Done</Text>
                </View>
                </TouchableOpacity>
































{/* - borderBottomLeftRadius: number
- borderBottomRightRadius: number
- borderTopLeftRadius: number
- borderTopRightRadius: number */}



   
          
    

        </View>
        </ScrollView>

        <View 
    style={{ 
        flexDirection:'row', 
       marginTop:10,
        justifyContent:'space-between',
         gap:40, 
         alignItems:'center',
          backgroundColor:'#F7FCFB',
           width:'100%',
            height:'10%', 
             paddingHorizontal:20,
             borderTopLeftRadius:30,
             borderTopRightRadius:30,
             // elevation:20,
           
              
             

            
              }}>


    <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
        <View>
            <Icons name="object-ungroup" size={25} /> 
            <Text style={{textAlign:'center'}}>Pay</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View>
            <Icons name="hands-helping" size={25}  style={{color:'#3cb043',}}/> 
            <Text style={{textAlign:'center',marginLeft:-7, color:'#3cb043'}}>Transfer</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Balance')}>
            <View>
            <Icons2 name="credit-card-multiple" size={25}   /> 
            <Text style={{textAlign:'center', marginLeft:-7, }}>Balance</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Support')}>
            <View>
            <Icons2 name="chat-outline" size={25} /> 
            <Text style={{textAlign:'center', marginLeft:-7}}>support</Text>
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
    container2: {
        flex: 1,
       

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

    input: {
        height: 50,
        margin: 12,
        padding: 10,
        width:370,
        backgroundColor:'white',
        elevation:40
      },

    btn:{
    
        backgroundColor: '#ee6b6e',
        width:150,
        height:30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
        
    },

    plusBtn:{
        width:50, 
        height:50,
         backgroundColor:'#3cb043', 
          textAlign:'center',
           flexDirection:'row',
            borderRadius:50,
            color:'white',
            position:'absolute',
             top:150,
             right:155,
            alignItems:'center',
            justifyContent: 'center',
            
            


    },
    img:{
        width:35,
        height:35,
        borderRadius:50,
        justifyContent:'center',
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
    container:{
        marginTop:25,
        borderRadius:30,
        width: 375,
        height: 180,
        backgroundColor: '#8f94fb',
        alignItems: 'center',
        border:'1px solid black',
    },
    miniContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop:35,
        width: 400,
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        border:'1px solid black',
        
    },


    miniContainer2:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:20,
        marginTop:10,
        width: '100%',
        alignItems: 'center',
       
        
    },

    

    miniContainer3:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:20,
        marginTop:10,
        width: '100%',
        alignItems: 'center',
        paddingVertical:5
       
        
    }
})

export default Transfer