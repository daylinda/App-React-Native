import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text>Contact Me</Text>
      <Text>Email: example@example.com</Text>
        <Text>Phone: 123-456-7890</Text>

        <Link href="/" style={styles.link}>
          <Text>Back Home</Text>
        </Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    link:{
        marginTop: 20,
        padding: 10,
    }
})