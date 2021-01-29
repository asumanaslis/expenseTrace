import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { WHITE } from "../styles/colors";

const AuthButton = ({ text, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...props}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginBottom: "5%",
    marginRight: 20,
    height: Platform.OS == "ios" ? "5.5%" : "7%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: WHITE,
    width: "40%",
    justifyContent: "center",
  },
  text: {
    color: WHITE,
    fontSize: 24,
    textAlign: "center",
  },
});

export default AuthButton;