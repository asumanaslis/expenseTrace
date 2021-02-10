import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { navigate } from "../navigationRef";
import { Colors } from "../styles/index";

const ProgressBar = ({ data, percentage, nav }) => {
  return (
    <TouchableOpacity
      style={{ marginBottom: 10 }}
      onPress={() => {
        navigate(nav, data);
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.barLabel}>{data.category}</Text>
        <Text style={{ marginRight: "10%", color: Colors.red }}>
          -{data.price}₺
        </Text>
      </View>
      <View style={styles.bar(data.color)}>
        <View
          style={{
            position: "absolute",
            borderRadius: 10,
            width: `${percentage}%`,
            backgroundColor: data.color,
            top: 0,
            bottom: 0,
            borderRadius: 10,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bar: (color) => {
    return {
      alignSelf: "center",
      // backgroundColor: color,
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
