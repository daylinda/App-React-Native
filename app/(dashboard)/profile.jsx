import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { use } from 'react'
import ThemedView from '../../components/ThemedView'
import Themedtext from '../../components/Themedtext'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'


const Profile = () => {
    const { user, logout } = useUser();
    
    const handleLogout = async ()=>{
        try{
             logout();

        }catch(error)
        {
            console.log(error);
        }
        
       

    }
    
  return (
    <ThemedView style={styles.container} safe={true}>
      <Themedtext title={true} style={styles.heading}>{user.email}</Themedtext>
      <Spacer height={100}/>
      <ThemedButton onPress={handleLogout} >
        <Text>Logout</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20,
        paddingBottom:20
        
    },    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,} 
    
    
    ,
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    btn:{
        width: '80%',
        padding: 15,  
        color: Colors.primary,
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        alignItems: 'center',
    },
    pressed:{
        opacity: 0.5,
    }

})