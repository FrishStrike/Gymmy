import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const skuf = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>ТЫ СКУФ!</Text>
    </View>
  )
}

export default skuf

const styles = StyleSheet.create({})