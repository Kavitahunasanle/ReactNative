import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Location = ({region,country}) => {
  return (
<>
<Text style={styles.location}>{region}</Text>

    
      <Text style={styles.country}>{country}</Text>
</>
  )
}

export default Location

const styles = StyleSheet.create({
  region:{
    color:"red",
    fontSize:25,
    fontWeight:'bold',
    marginBottom:6
  },
  country:{
    color:"#111",
    fontSize:25
  },
})