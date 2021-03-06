import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { navigate } from "../navigationRef";
import { Colors } from "../styles/index";

const GroupList = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate("GroupScreen");
      }}
    >
      <View style={{ marginLeft: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 16 }}>Group Title</Text>
          <Text style={styles.subtitle}>Group Subtitle</Text>
        </View>
        <Text style={{ fontSize: 8 }}>12/12/2020</Text>
      </View>
      <Icon name="lock-closed-outline" style={styles.iconStyle}></Icon>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    margin: 10,
  },
  subtitle: {
    fontSize: 8,
    color: Colors.lightGrey,
    alignSelf: "flex-end",
  },
});

export default GroupList;
