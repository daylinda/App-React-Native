import { View, Text,useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const Themedtext = ({style,title = false, ...props}) => {
    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme] ?? Colors.light;
    const textColor = title ? themeColors.title : themeColors.text;
    
  return (
    
      <Text style={[ { color: textColor }, style ]} {...props}>
        
      </Text>
    
  )
}

export default Themedtext