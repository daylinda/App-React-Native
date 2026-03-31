import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import React from "react";
import Logo from "../assets/icon.png";
import { Link, Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemedCard from "../components/ThemedCard";
import ThemedLogo from "../components/ThemedLogo";
import Themedtext from "../components/Themedtext";

const Home = () => {
  const colorScheme = useColorScheme();
  console.log("Current color scheme:", colorScheme);
  const themeColors = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  return (
    // <ThemedView style={styles.container} safe={true} >
    //   <ThemedLogo style={styles.logo} />

    //   <Themedtext style={styles.title}>This is the best APP</Themedtext>
    //   <Themedtext> Welcome to the AppList</Themedtext>
      
    //   <Link href="/login" style={styles.link}>
    //     <Themedtext>Login</Themedtext>
    //   </Link>
    //   <Link href="/register" style={styles.link}>
    //     <Themedtext>Register</Themedtext>
    //   </Link>
    //   <Link href="/profile" style={styles.link}>
    //     <Themedtext>Profile</Themedtext>
    //   </Link>
    // </ThemedView>

  //   <NavigationContainer>
  //   <Stack.Navigator>
  //     {user ? (
  //       // User is logged in
  //       <Stack.Screen name="UserPage" component={UserScreen} />
  //     ) : (
  //       // No user context found
  //       <Stack.Screen name="Login" component={LoginScreen} />
  //     )}
  //   </Stack.Navigator>
  // </NavigationContainer>
  <></>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    color: "#8c89e7",
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  logo: {
    margin: 20,
    width: 200,
    height: 100,
  },
  link: {
    marginTop: 10,
    textDecorationColor: "#fff",
    textDecorationStyle: "solid",
  },
});
