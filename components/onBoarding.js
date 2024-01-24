import React from 'react'
import {View, Text, ImageBackground, Image, StyleSheet, StatusBar} from "react-native"


const OnBoarding = ({navigation})=>{

    setTimeout(()=>{
        navigation.navigate('Home')
    }, 3000)
    return(

  
       
              <View style={{backgroundColor:'#3cb043', flex:1, textAlign:'center', justifyContent:'center'}}>
                <StatusBar />

             <View style={{justifyContent:'center', alignItems: 'center', }}>
             <Image source={require('../assets/opay.jpg')} style={styles.img}/>

             </View>

             <Text style={{textAlign:'center', paddingVertical:10, fontWeight:800, fontSize:20}}>We are Beyond Banking</Text>

          
          <Text style={{textAlign:'center', paddingVertical:5, fontWeight:500, textTransform:'uppercase'}}>
            Licensed by CBN and insured by <Text style={{fontWeight:'bold', fontSize:25}}>NDIC</Text>
          </Text>
              


              </View>

       
      
    )
}


const styles = StyleSheet.create({
    img:{
        width:60,
        height:60,
        borderRadius:50
    }
})


export default OnBoarding