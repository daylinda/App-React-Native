import { Keyboard, StyleSheet,  TouchableWithoutFeedback } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import Themedtext from "../../components/Themedtext";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Colors";
import { Link, useRouter } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedInput from "../../components/ThemedInput";

import ThemedPassword from "../../components/ThemedPassword";
import { useUser } from "../../hooks/useUser";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error,setError] = React.useState(null);

  const login = useUser().login;
  const router = useRouter()
  
  const  handleSubmit = async () => {
    setError(null); // Clear previous errors

    console.log("Login form submitted with email:", email, "and password:", password);
    try{
      await login(email, password);
      console.log("User logged in successfully");
      router.replace("/profile");
      // navigation.navigate("/profile"); // Navigate to profile page after successful login
      // router.push("/profile"); // Navigate to profile page after successful login
    }
    catch (error) {
      console.error("Error occurred while logging in:", error);
      setError(error.message); // Set error message to display to the user

    }

  };

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <ThemedView style={styles.container}>
      <Spacer />
      <Themedtext style={styles.title} title={true}>
        Login here
      </Themedtext>

      <Spacer height={20} />

      <ThemedInput
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value = {email}
      />
      <ThemedPassword password={password} setPassword={setPassword}  />


      <Spacer height={20} />

      <ThemedButton onPress={handleSubmit}>
        <Themedtext>Login</Themedtext>
      </ThemedButton>

      <Spacer/>

        {error && <Themedtext style={styles.error}>{error}</Themedtext>}

      <Spacer height={100} />

      <Link href="/register">
        <Themedtext>Don't have an account? Register</Themedtext>
      </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  btn: {
    width: "80%",
    padding: 15,
    color: Colors.primary,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
