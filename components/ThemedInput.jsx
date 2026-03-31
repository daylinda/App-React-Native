import {
  TextInput,
  useColorScheme,
  StyleSheet,
} from "react-native";
import React from "react";

import { Colors } from "../constants/Colors";
const ThemedInput = ({ placeholder, secureTextEntry, style, ...props }) => {
  const colorScheme = useColorScheme();
 
  const themeColors = Colors[colorScheme] ?? Colors.light;
 

  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={themeColors.placleholdertext}
      color={themeColors.text}
      style={[styles.input, style]}
      {...props}
    ></TextInput>
  );
};

export default ThemedInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    width: "80%",
    marginBottom: 10,
  },
});
