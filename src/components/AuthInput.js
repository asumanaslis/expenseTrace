import React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";

const AuthInput = ({ inputLabel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{inputLabel}</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 25,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#2F52E0",
    borderRadius: 10,
    width: "80%",
    height: 35,
  },
  text: {
    color: "#2F52E0",
    fontSize: 14,
  },
});

export default AuthInput;
