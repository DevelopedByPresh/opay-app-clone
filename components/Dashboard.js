import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, FlatList} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id:1,
        details:'Transfer Money from any Bank App to Opay Balance',
        icon:'hands-helping'
        
    },

    {
        id:2,
        details:'Transfer Money from any Bank App to Opay Balance',
        icon:'person-booth'
        
    },


    {
        id:3,
        details:'Transfer Money from any Bank App to Opay Balance',
        icon:'object-ungroup'
        
    },

    {
        id:4,
        details:'Transfer Money from any Bank App to Opay Balance',
        icon:'snowplow'
        
    },


]

const Carousel = ({item, navigation})=>{
    return(
        <View style={styles.miniContainer}>

            <View style={{flexDirection:'row', justifyContent: 'center', alignItems:'center', gap:10, marginTop:20}}>
            <Icons name={item.icon} size={30} style={{color:'#3cb043', marginRight:25}}/>
        <Text style={{fontWeight:'bold'}} >Transfer Money from any Bank App {'\n'} from Opay Balance</Text>

            </View>
       


      </View>
        
    )
}


const Dashboard = ()=>{
    const navigation = useNavigation();
    return(
        
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:'#f4f4f4'}}>

            
            
            <View style={{marginTop:20, flexDirection:'row', justifyContent: 'center', alignItems: 'center', gap:130}}>
            <Icons2 name="menu"  size={30} style={{color:'#3cb043'}}/>
            <Text style={{fontSize:25, fontWeight: 'bold'}}>Opay</Text>

            <View>
            <Image source={require('../assets/avatar2.jpg')} style={styles.img}/>
            <Text style={styles.Notification}>3</Text>
            </View>

           
           

            </View>


            <View style={styles.container}>
                <Text style={{paddingVertical:10, color:'white', fontWeight:'bold', fontSize:12}}>Good Morning.</Text>
                <Text style={{ color:'white', fontWeight:'bold', fontSize:20}}>George!</Text>


            <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', gap:250, paddingVertical:5}}>

            <View >
                    <Text style={{paddingVertical:5, color:'white'}}>Balance</Text>
                    <Text style={{ color:'white'}}>Bonus</Text>
                </View>


                <View>
                    <Text style={{paddingVertical:5, color:'white'}}> ₦ 2600</Text>
                    <Text style={{ color:'white'}}> ₦ 200</Text>
                </View>

                

          </View>






          
          <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', gap:120, paddingVertical:5}}>

         <View  style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', }}>
            <Icons2 name="credit-card-multiple" style={{marginRight:5, color:'white'}} size={20}/>
        <Text style={{paddingVertical:5, color:'white', marginRight:10, fontSize:20, fontWeight:'bold'}}> Total Balance</Text>
       
        </View>

       <View >
        <Text style={{paddingVertical:5, color:'white', fontSize:27, marginRight:10, fontWeight:'bold'}}>₦ 200</Text>
         
       
        </View>
</View>


      <View  style={styles.plusBtn}>
     
        <Icons name="plus"  size={25} style={{color: 'white'}}/>

      </View>
              
          </View>


          <FlatList
           data={data} 
           renderItem={({item})=> <Carousel item={item}/>}
           horizontal
           showsHorizontalScrollIndicator={false}
           
           />
<Text style={{marginTop:20, marginRight:335, fontWeight:'bold', fontSize:25}}>Pay</Text>

<View>

    <View style={{paddingVertical:10, justifyContent: 'center', flexDirection:'row',  gap:10,  }}>

        <TouchableOpacity>
    <View style={{ width: 190, height: 50, backgroundColor: 'white',  borderRadius:10, flexDirection:'row', gap:30, justifyContent:'center', alignItems:'center' }}>
        <Icons2 name="cellphone" size={30} style={{color:'#3cb043'}}/>
        <Text style={{fontWeight:'bold', fontSize:18}} > Buy Airtime {'\n'}</Text> 
        <Text style={{fontSize:10, marginLeft:-100, marginTop:20, fontWeight:400}}>12 Companies</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={{ width: 190, height: 50, backgroundColor: 'white',  borderRadius:10, flexDirection:'row', gap:30, justifyContent:'center', alignItems:'center' }}>
        <Icons2 name="fingerprint" size={30} style={{color:'#3cb043', marginRight:10}}/>
        <Text style={{fontWeight:'bold', fontSize:18}} >Mobile Data {'\n'}</Text> 
        <Text style={{fontSize:10, marginLeft:-100, marginTop:20, fontWeight:400}}>10 Companies</Text>
    </View>
    </TouchableOpacity>

 
    
    </View>


    <View style={{paddingVertical:5, justifyContent: 'center', flexDirection:'row',  gap:10}}>

    <TouchableOpacity>
    <View style={{ width: 190, height: 50, backgroundColor: 'white',  borderRadius:10, flexDirection:'row', gap:30, justifyContent:'center', alignItems:'center' }}>
        <Icons2 name="lightbulb" size={30} style={{color:'#3cb043', marginRight:10}}/>
        <Text style={{fontWeight:'bold', fontSize:18}} >Electricity {'\n'}</Text> 
        <Text style={{fontSize:10, marginLeft:-90, marginTop:20, fontWeight:400}}>8 Companies</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={{ width: 190, height: 50, backgroundColor: '#3cb043',  borderRadius:10, flexDirection:'row', gap:30, justifyContent:'center', alignItems:'center' }}>
        <Icons name="hands" size={25} style={{color:'white'}}/>
        <Text style={{fontWeight:'bold', fontSize:18, color:'white'}} >Play4aChild {'\n'}</Text> 
        <Text style={{fontSize:10, marginLeft:-90, marginTop:20, fontWeight:400, color:'white'}}>12 Companies</Text>
    </View>
    </TouchableOpacity>



</View>

<View style={{paddingVertical:5, justifyContent: 'center', flexDirection:'row',  gap:10, alignItems:'center'}}>

<TouchableOpacity>
<View style={{ width: 190, height: 50, backgroundColor: 'white',  borderRadius:10, flexDirection:'row', gap:30, justifyContent:'center', alignItems:'center' }}>
        <Icons name="motorcycle" size={25} style={{color:'#3cb043', marginRight:20}}/>
        <Text style={{fontWeight:'bold', fontSize:18}} >O food {'\n'}</Text> 
        <Text style={{fontSize:10, marginLeft:-90, marginTop:20, fontWeight:400}}>12 Companies</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={{ width: 190, height: 50, backgroundColor: 'white',  borderRadius:10, flexDirection:'row', gap:30, justifyContent:'center', alignItems:'center' }}>
        <Icons name="tv" size={25} style={{color:'#3cb043', marginRight:30}}/>
        <Text style={{fontWeight:'bold', fontSize:18, marginRight:30}} >T.v {'\n'}</Text> 
        <Text style={{fontSize:10, marginLeft:-90, marginTop:20, fontWeight:400}}>12 Companies</Text>
    </View>
    </TouchableOpacity>



</View>


    
</View>




    <View style={{ elevation:5, width: 390, height: 70, marginTop:30, backgroundColor: 'white',paddingHorizontal:20, borderRadius:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Icons name="motorcycle" size={30} style={{color:'#ee6b6e',}}/>
        <Text style={{fontWeight:'bold', fontSize:18, marginLeft:20}} >ORide {'\n'}</Text> 
        <Text style={{fontSize:10,  fontWeight:400,marginTop:10, marginLeft:-45}}>Try now!</Text>

        </View>

        <TouchableOpacity>
        <View style={styles.btn}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Get coupon Now!</Text>
                </View>
                </TouchableOpacity>
       
       
    </View>
    



    <View 
    style={{ 
        flexDirection:'row', 
        marginTop:70,
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

    <TouchableOpacity>
        <View>
            <Icons name="object-ungroup" size={25} style={{color:'#3cb043',}}/> 
            <Text style={{textAlign:'center', color:'#3cb043'}}>Pay</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Transfer')}>
            <View>
            <Icons name="hands-helping" size={25}  /> 
            <Text style={{textAlign:'center',marginLeft:-7}}>Transfer</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Balance')}>
            <View>
            <Icons2 name="credit-card-multiple" size={25} /> 
            <Text style={{textAlign:'center', marginLeft:-7}}>Balance</Text>
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
        marginTop:45,
        width: 300,
        height: 70,
        backgroundColor: 'white',
        alignItems: 'center',
        border:'1px solid black',
        
        marginRight:10,
        marginLeft:10

    }
})

export default Dashboard