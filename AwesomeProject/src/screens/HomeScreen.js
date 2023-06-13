import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      {/* <TouchableOpacity onPress={()=>navigation.navigate("FlashScreen")}>
    
    <Text>FlashScreen</Text>
    </TouchableOpacity> */}
  <TouchableOpacity onPress={()=>navigation.navigate("Forecast")}>
    
      <Text>HomeScreen</Text>
      </TouchableOpacity>

      
    </View>
  )
}
const styles = StyleSheet.create({})
export default HomeScreen

