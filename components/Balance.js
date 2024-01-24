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
        icon:'calendar-alt'
        
    },

 


]

const Carousel = ({item, navigation})=>{
    return(
        <View style={styles.miniContainer}>

            <View style={{flexDirection:'row', justifyContent: 'center', alignItems:'center', marginTop:10}}>
            <Icons name={item.icon} size={15} style={{color:'#3cb043', marginRight:5}}/>
        <Text style={{fontWeight:400}} >All Categories</Text>
        <Icon name="arrow-drop-down" size={15} style={{ marginRight:5}}/>

            </View>


            <View style={{flexDirection:'row', justifyContent: 'center', alignItems:'center', marginTop:10}}>
            <Icons2 name='calendar-check' size={15} style={{color:'#3cb043', marginRight:5}}/>
        <Text style={{fontWeight:400}} >All Status</Text>
        <Icon name="arrow-drop-down" size={15} style={{ marginRight:5}}/>

            </View>


            <View style={{flexDirection:'row', justifyContent: 'center', alignItems:'center', marginTop:10}}>
            <Icons name={item.icon} size={15} style={{color:'#3cb043', marginRight:5}}/>
        <Text style={{fontWeight:400}} >Last week</Text>
        <Icon name="arrow-drop-down" size={15} style={{ marginRight:5}}/>

            </View>
       


      </View>
        
    )
}


const Balance = ()=>{
    const navigation = useNavigation();
    return(
        
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:'#f4f4f4'}}>
            
            <View style={{marginTop:20, flexDirection:'row', justifyContent: 'center', alignItems: 'center', gap:120}}>
            <Icons2 name="menu"  size={30} style={{color:'#3cb043'}}/>
            <Text style={{fontSize:25, fontWeight: 'bold'}}>Balance</Text>

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
        <Text style={{paddingVertical:5, color:'white', marginRight:3, fontSize:20, fontWeight:'bold'}}> Total Balance</Text>
       
        </View>

       <View >
        <Text style={{paddingVertical:5, color:'white', fontSize:27, marginRight:10, fontWeight:'bold'}}>₦ 2800</Text>
         
       
        </View>
</View>


      <View  style={styles.plusBtn}>
     
        <Icons name="plus"  size={25} style={{color: 'white'}}/>
      </View>

              
          </View>
          <View style={{flexDirection:'row', gap:100, marginTop:5}}>
          <Text style={{fontWeight:'bold'}}>Receive Money</Text>
          <Text style={{fontWeight:'bold'}}>Add Money</Text>

          </View>
         


          <FlatList
           data={data} 
           renderItem={({item})=> <Carousel item={item}/>}
           horizontal
           showsHorizontalScrollIndicator={false}
           
           />

           <View style={styles.miniContainer2}>

            <View style={{marginTop:20}}>
            <Text style={{ fontWeight:'bold', fontSize:20}}>Today</Text>
            </View>

            <View style={{flexDirection:'row', gap:3, marginTop:20 }}>
                <Icon name="ios-share" size={18} style={{marginTop:2, color:'#3cb043'}}/>
            <Text style={{  fontSize:18, color:'gray' }}>Share</Text>
            </View>

           </View>


           <View style={styles.miniContainer3}>


            <View style={{flexDirection:'row', gap:15}}>
            <View>
            <Icons2 name="credit-card-multiple" style={{marginRight:5, color:'#3cb043' }} size={25}/>
            </View>

            <View>
                <Text style={{fontWeight:'bold'}}>Balance Top Up</Text>
                <Text style={{fontWeight:300}}>15:10  . Pending</Text>
            </View>

            </View>

           

            <View style={{flexDirection:'row', justifyContent: 'center', alignItems:'center', gap:15}}>
                <Text style={{marginRight:-13, color:'#3cb043'}}>+</Text>
                <Text style={{fontWeight:'bold'}}>$3,500</Text>
                <Icon name="arrow-forward-ios"/>
              
            </View>



           </View>


           <View style={{borderBottomWidth: 1,borderBottomColor: 'gray',width: 400, marginTop:10}}/>















           <View style={styles.miniContainer3}>


<View style={{flexDirection:'row', gap:15}}>
<View>
<Icons name="hands-helping" style={{marginRight:5, color:'#3cb043' }} size={25}/>
</View>

<View>
    <Text style={{fontWeight:'bold'}}>Bank Payment</Text>
    <Text style={{fontWeight:300}}>14:30  . Completed</Text>
</View>

</View>



<View style={{flexDirection:'row', justifyContent: 'center', alignItems:'center', gap:15}}>
    <Text style={{marginRight:-13, color:'red'}}>-</Text>
    <Text style={{fontWeight:'bold'}}>2600</Text>
    <Icon name="arrow-forward-ios" />
  
</View>



</View>


<View style={{borderBottomWidth: 1,borderBottomColor: 'gray',width: 400, marginTop:10}}/>









<View style={styles.miniContainer3}>


<View style={{flexDirection:'row', gap:15}}>
<View>
<Icons2 name="credit-card-multiple" style={{marginRight:5, color:'#3cb043' }} size={25}/>
</View>

<View>
    <Text style={{fontWeight:'bold'}}>Balance Top Up</Text>
    <Text style={{fontWeight:300}}>12:25  . Completed</Text>
</View>

</View>



<View style={{flexDirection:'row', justifyContent: 'center', alignItems:'center', gap:15}}>
    <Text style={{marginRight:-13, color:'#3cb043'}}>+</Text>
    <Text style={{fontWeight:'bold'}}>$350</Text>
    <Icon name="arrow-forward-ios"/>
  
</View>



</View>


<View style={{borderBottomWidth: 1,borderBottomColor: 'gray',width: 400, marginTop:10}}/>







<View style={styles.miniContainer2}>

<View style={{marginTop:20}}>
<Text style={{ fontWeight:'bold', fontSize:20}}>Yesterday</Text>
</View>



</View>




<View style={styles.miniContainer3}>


<View style={{flexDirection:'row', gap:15}}>
<View>
<Icons2 name="credit-card-multiple" style={{marginRight:5, color:'#3cb043' }} size={25}/>
</View>

<View>
    <Text style={{fontWeight:'bold'}}>Balance Top Up</Text>
    <Text style={{fontWeight:300}}>15:10  . Pending</Text>
</View>

</View>



<View style={{flexDirection:'row', justifyContent: 'center', alignItems:'center', gap:15}}>
    <Text style={{marginRight:-13, color:'#3cb043'}}>+</Text>
    <Text style={{fontWeight:'bold'}}>$3,500</Text>
    <Icon name="arrow-forward-ios"/>
  
</View>



</View>

































{/* - borderBottomLeftRadius: number
- borderBottomRightRadius: number
- borderTopLeftRadius: number
- borderTopRightRadius: number */}



    <View 
    style={{ 
        flexDirection:'row', 
        marginTop:50,
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

            <TouchableOpacity  onPress={()=>navigation.navigate('Transfer')}>
            <View>
            <Icons name="hands-helping" size={25} /> 
            <Text style={{textAlign:'center',marginLeft:-7}}>Transfer</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View>
            <Icons2 name="credit-card-multiple" size={25}   style={{color:'#3cb043',}}/> 
            <Text style={{textAlign:'center', marginLeft:-7, color:'#3cb043'}}>Balance</Text>
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

export default Balance