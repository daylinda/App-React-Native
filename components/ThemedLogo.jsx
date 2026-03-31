import { View, useColorScheme,Image } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const ThemedLogo = ({...props}) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? require("../assets/dark_logo.png") : require("../assets/light_logo.png");


  return (
   <Image source={logo} {...props} />
  )
}

export default ThemedLogo