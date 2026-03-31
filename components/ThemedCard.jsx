import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
    

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[{ backgroundColor: themeColors.cardbackground }, style]} {...props}>
    </View>
  )
}

export default ThemedCard