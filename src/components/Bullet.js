import React from "react";

import { View, StyleSheet, Text } from "react-native";

const Bullet = ({ data, percentage }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
      }}
    >
      {/* Color */}
      <View
        style={{
          backgroundColor: data.color,
          marginTop: 2,
          width: 15,
          height: 15,
          borderRadius: 10,
          alignSelf: "center",
        }}
      />
      {/* Labels */}
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: "center" }}>{data.category}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ fontSize: 8, color: "#C4C4C4" }}>{data.price}₺</Text>
          <Text style={{ fontSize: 8, color: "#C4C4C4" }}>{percentage}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Bullet;
