import { Pressable, StyleSheet, Text,Image, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const FlashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("Home")
    },1500)
  })
  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../../assets/icons/weather-app.png')}/>
      <Image style={styles.credits} source={require('../../assets/icons/weatherapilogo.png')}/>
      
      <Pressable onPress={()=>navigation.goBack()}>
    
      {/* <Text>FlashScreen</Text> */}
      </Pressable>
    </View>
  )
}
// const styles = StyleSheet.create({})
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'white'
  },
  logo:{
    height:Dimensions.get('window').width/4,
    width:Dimensions.get('window').width/4
},

  credits:{
    height:Dimensions.get('window').height/4,
    // height:70,
    // width:50,
    position:'absolute',
    bottom:40
}})
 
export default FlashScreen

