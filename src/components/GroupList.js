import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { navigate } from "../navigationRef";

const GroupList = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#C4C4C4",
        margin: 10,
      }}
      onPress={() => {
        navigate("GroupScreen");
      }}
    >
      <View style={{ marginLeft: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 16 }}>GroupTitle</Text>
          <Text
            style={{
              fontSize: 8,
              color: "#C4C4C4",
              alignSelf: "flex-end",
            }}
          >
            Group Subtitle
          </Text>
        </View>
        <Text style={{ fontSize: 8 }}>12/12/2020</Text>
      </View>
      <Icon name="lock-closed-outline" style={styles.iconStyle}></Icon>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default GroupList;
