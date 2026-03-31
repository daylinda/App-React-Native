import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Link href="/" style={styles.link}>
        <Text>Back Home</Text>
      </Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#8c89e7',
    },
    link:{
        marginTop: 20,
        padding: 10,
    }

})