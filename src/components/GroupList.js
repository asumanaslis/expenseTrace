import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { navigate } from "../navigationRef";
import { Colors } from "../styles/index";

const GroupList = ({ group }) => {
  function getGroupDate() {
    var day = group.date.getDate();
    var month = group.date.getMonth() + 1;
    var year = group.date.getFullYear();

    return day + "/" + month + "/" + year;
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate("Group", group);
      }}
    >
      <View style={{ marginLeft: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 16 }}>{group.groupName}</Text>
          <Text style={styles.subtitle}>{group.groupSubtitle}</Text>
        </View>
        <Text style={{ fontSize: 8 }}>{getGroupDate()}</Text>
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
