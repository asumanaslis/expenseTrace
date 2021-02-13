import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import GroupList from "../../components/GroupList";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleVariables } from "../../styleVariable/StyleVariable";

const AllGroupsScreen = () => {
  return (
    <SafeAreaView
      style={{ alignItems: "center", flex: 1, backgroundColor: "#fff" }}
    >
      <Text style={styles.mainTitleText}>Groups</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <GroupList />
        <GroupList />
        <GroupList />
        <GroupList />
        <GroupList />
        <GroupList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: StyleVariables.width * 0.01,
    width: "90%",
    flex: 1,
  },
  mainTitleText: {
    fontSize: RFPercentage(5),
    fontWeight: "bold",
    flexDirection: "row",
    textAlign: 'center'
  },
});

export default AllGroupsScreen;
