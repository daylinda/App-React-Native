import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import ThemedView from './ThemedView'
import Themedtext from './Themedtext'
import { Colors } from '../constants/Colors'

const ThemedLoading = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
        <ActivityIndicator style={{color:Colors.primary}} ></ActivityIndicator>
      <Themedtext style={{color:Colors.primary,}}>Loading...</Themedtext>
    </ThemedView>
  )
}

export default ThemedLoading
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})


