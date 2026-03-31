import { StyleSheet } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import Themedtext from "../../components/Themedtext";
import Spacer from "../../components/Spacer";
import {Colors} from "../../constants/Colors";

const Books = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <Themedtext title={true} style={styles.heading}>
        Books
      </Themedtext>
      <Spacer />
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
