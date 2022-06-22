import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View>
      <Text style = {styles.textLogo}>TNI</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    textLogo:{
        color: "magenta", 
        fontSize: 40
    }
 })