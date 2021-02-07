import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RED } from "../styles/colors";
import { navigate } from "../navigationRef";

const ProgressBar = ({ data }) => {
  return (
    <TouchableOpacity style={{ marginBottom: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.barLabel}>{data.category}</Text>
        <Text style={{ marginRight: "10%", color: RED }}>-{data.price}₺</Text>
      </View>
      <View style={styles.bar(data.color)}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bar: (color) => {
    return {
      alignSelf: "center",
      backgroundColor: color,
      width: "85%",
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: color,
    };
  },
  barLabel: {
    marginLeft: "10%",
  },
});

export default ProgressBar;
