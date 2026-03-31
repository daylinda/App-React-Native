import { View, Pressable, useColorScheme, StyleSheet } from "react-native";
import { useState } from "react";
import ThemedInput from "./ThemedInput";
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const ThemedPassword = ({ password, setPassword }) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] ?? Colors.light;
  const [ispasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!ispasswordVisible);
  };
  return (
    <View style={styles.inputContainer}>
      <ThemedInput
        placeholder="Password"
        secureTextEntry={!ispasswordVisible}
        onChangeText={setPassword}
        value={password}
        style={{
          borderWidth: 0,
          paddingRight: 40,
          paddingLeft: 14,
          alignSelf: "stretch",
        }}
      />

      <Pressable
        onPress={togglePasswordVisibility}
        style={{ alignSelf: "flex-end", marginBottom: 10 }}
      >
        <Ionicons
          name={ispasswordVisible ? "eye-off" : "eye"}
          size={24}
          color={themeColors.iconcolor}
          style={styles.iconButton}
        />
      </Pressable>
    </View>
  );
};

export default ThemedPassword;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    verticalAlign: "center",

    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    paddingRight: 10,
    paddingTop: 10,
    width: "80%",
  },
  inputField: {
    flex: 1,
    padding: 14,
  },
  iconButton: {
    padding: 5,
  },
});
