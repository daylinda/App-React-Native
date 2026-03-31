import { StyleSheet, useColorScheme, Text, View } from "react-native";
import React, { use } from "react";
import { Slot, Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { UserProvider } from "../contexts/UserContext";

import { useRouter } from "expo-router";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  console.log("Current color scheme:", colorScheme);
  const themeColors = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined

  const router = useRouter();
  return (
    <UserProvider>
      
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: themeColors.navbackground },
          headerTintColor: themeColors.title,
        }}
      >
       <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
       
      </Stack>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
