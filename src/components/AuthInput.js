import React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { BLUE } from "../styles/colors";

const AuthInput = ({ inputLabel, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{inputLabel}</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
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
    borderColor: BLUE,
    borderRadius: 10,
    width: "80%",
    height: 35,
  },
  text: {
    color: BLUE,
    fontSize: 14,
  },
});

export default AuthInput;
