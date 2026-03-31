import { View, Text, StatusBar } from 'react-native'
import React from 'react'

import { Slot, Stack } from 'expo-router'
import GuestOnly from '../../components/auth/GuestOnly'

const AuthLayout = () => {
  return (
    <GuestOnly>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerShown: false,
        animation:"none"
      }}>
      </Stack>

    </ GuestOnly>
  )
}

export default AuthLayout