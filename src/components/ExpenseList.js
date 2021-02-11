import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../styles/index";

const ExpenseList = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 16 }}>{data.expenseTitle}</Text>
          <Text style={styles.subtitle}>{data.categorySubtitle}</Text>
        </View>
        <Text style={{ fontSize: 8 }}>12/12/2020</Text>
      </View>
      <Text>{data.price}₺</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    margin: 5,
  },
  subtitle: {
    fontSize: 8,
    color: Colors.lightGrey,
    alignSelf: "flex-end",
  },
});

export default ExpenseList;
