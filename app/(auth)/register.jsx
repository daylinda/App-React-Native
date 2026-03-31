import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  Touchable,
} from "react-native";
import React, { useState } from "react";
import ThemedView from "../../components/ThemedView";
import Themedtext from "../../components/Themedtext";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Colors";
import { Link, router, useNavigation, useRouter } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedInput from "../../components/ThemedInput";

import ThemedPassword from "../../components/ThemedPassword";

import { TouchableWithoutFeedback } from "react-native";

import { useUser } from "../../hooks/useUser";
import { PhoneMultiFactorGenerator } from "firebase/auth/web-extension";
import ThemedLoading from "../../components/ThemedLoading";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);

  const { user, register, loading } = useUser();
  const router = useRouter();

  const handleSubmit = async () => {
    setError(null); // Clear previous errors

    try {
      await register(email, password,username,phoneNumber);

      if (!loading) {
        console.log("loading");
        router.replace("/login");
      }
    } catch (error) {
      setError(error.message); // Set error message to display to the user
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ThemedView style={styles.container}>
        <Spacer />
        <Themedtext style={styles.title} title={true}>
          Register here
        </Themedtext>

        <Spacer height={20} />

        <ThemedInput
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />

        <ThemedInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedInput
          placeholder="Phone Number"
          keyboardType="phone-number"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />

        <ThemedPassword password={password} setPassword={setPassword} />

        <Spacer height={20} />

        <ThemedButton onPress={handleSubmit}>
          <Themedtext>Register</Themedtext>
        </ThemedButton>

        <Spacer />

        {error && <Themedtext style={styles.error}>{error}</Themedtext>}

        <Spacer height={100} />

        <Link href="/login">
          <Themedtext>Have an account? Login</Themedtext>
        </Link>

        {loading && (
          // <ActivityIndicator
          //   size="large"
          //   color={Colors.primary}
          //   style={{ marginTop: 20 }}
          // />
          <ThemedLoading />
        )}
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

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
  error: {
    color: Colors.error,
    marginTop: 10,
    textAlign: "center",
    backgroundColor: Colors.errorBackground,
    padding: 10,
    borderRadius: 5,
    width: "80%",
  },
});
