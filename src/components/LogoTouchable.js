import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

const LogoTouchable = ({ logo }) => {
  return (
    <TouchableOpacity>
      <Image source={logo} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: "cover",
  },
});

export default LogoTouchable;
