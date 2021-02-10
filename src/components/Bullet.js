import React from "react";

import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../styles/colors";

const Bullet = ({ data, percentage }) => {
  return (
    <View style={styles.container}>
      {/* Color */}
      <View style={styles.colorContainer(data.color)} />
      {/* Labels */}
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: "center" }}>{data.category}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={styles.text}>{data.price}₺</Text>
          <Text style={styles.text}>{percentage}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  colorContainer: (color) => {
    return {
      backgroundColor: color,
      marginTop: 2,
      width: 15,
      height: 15,
      borderRadius: 10,
      alignSelf: "center",
    };
  },
  text: { fontSize: 8, color: Colors.lightGrey },
});

export default Bullet;
