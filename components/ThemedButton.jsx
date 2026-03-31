import { View, Text, Pressable,StyleSheet} from 'react-native'


import { Colors } from '../constants/Colors';


const ThemedButton = ({style, ...props}) => {

  return (
    <Pressable     style={({ pressed }) => [styles.btn,pressed&&styles.pressed, style]} {...props}> 
    </Pressable>
  )
    
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.5,
    },
})