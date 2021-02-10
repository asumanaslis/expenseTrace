import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ExpenseList = ({ data }) => {
  console.log(data);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "85%",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#C4C4C4",
        margin: 5,
      }}
    >
      <View style={{ marginLeft: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 16 }}>Expense Title</Text>
          <Text
            style={{
              fontSize: 8,
              color: "#C4C4C4",
              alignSelf: "flex-end",
            }}
          >
            Expense Subtitle
          </Text>
        </View>
        <Text style={{ fontSize: 8 }}>12/12/2020</Text>
      </View>
      <Text>{data.price}₺</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpenseList;
