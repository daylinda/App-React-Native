import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined

  if (!safe) {
   
    return (
      <View
        style={[{ backgroundColor: themeColors.background }, style]}
        {...props}
      ></View>
    );
  }

  const insets = useSafeAreaInsets();
  

  return (
    
      <View
        style={[
          {
            backgroundColor: themeColors.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
          style,
        ]}
        {...props}
      ></View>
    
  );
};

export default ThemedView;
