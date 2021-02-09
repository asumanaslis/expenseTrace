import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import GroupList from "../../components/GroupList";

const AllGroupsScreen = () => {
  return (
    <SafeAreaView
      style={{ alignItems: "center", flex: 1, backgroundColor: "#fff" }}
    >
      <Text style={{ fontSize: 24, marginTop: 20 }}>Groups</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
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
    marginTop: 10,
    width: "90%",
    flex: 1,
  },
});

export default AllGroupsScreen;
