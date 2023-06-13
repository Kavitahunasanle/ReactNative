import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Location from '../component/Location';

const BASE_URL = 'https://api.weatherapi.com/v1';
const key = '7d321596685a4bfa92570612230906';
const city = 'Bangalore';

const ForecastScreen = () => {
  const [weather, setWeather] = useState();
  const [isloading, setLoading] = useState(false);

  getWeatherDate = async () => {
    try {
      const response = await fetch(
        'https://api.weatherapi.com/v1/forecast.json?key= 7d321596685a4bfa92570612230906&q=London&days=1&aqi=no&alerts=no',
      );
      if (response.status == 200) {
        // console.log('sucess');
        const data=await response.json();
        console.log(data);
        setWeather(data);
      } else {
        console.log('something wrong');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
getWeatherDate();
  },[])

  return (
    <LinearGradient style={styles.container} colors={['#123', '#000']}>
      <View style={styles.viewContainer}>
        {/* <Location region={'Bangalore'} country={'india'} /> */}
        <Location region={weather?.location?.region} country={weather?.location?.country} />
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    // backgroundColor:'red'
  },
  // region:{
  //   color:"red",
  //   fontSize:25,
  //   fontWeight:'bold',
  //   marginBottom:6
  // },
  // country:{
  //   color:"#111",
  //   fontSize:25
  // },
});

export default ForecastScreen;
