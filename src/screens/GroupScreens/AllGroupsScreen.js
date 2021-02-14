import React, { useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import GroupList from "../../components/GroupList";
import store from "../../redux/store";
import { navChanged } from "../../redux/actions";
import { Colors } from "../../styles/index";
import { navigate } from "../../navigationRef";
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector } from "react-redux";

const AllGroupsScreen = ({ navigation }) => {
  const groups = useSelector((state) => state.groupExpense);
  console.log(groups);
  useEffect(() => {
    const didFocusSubscription = navigation.addListener("didFocus", () => {
      store.dispatch(navChanged(navigation.state.routeName));
    });
    return () => {
      didFocusSubscription.remove();
    };
  }, []);

  function renderGroupList() {
    return groups.map((item) => {
      return <GroupList key={item.groupID} group={item} />;
    });
  }
  return (
    <SafeAreaView
      style={{ alignItems: "center", flex: 1, backgroundColor: "#fff" }}
    >
      {/* Groups Label and Create Group Container  */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 99999,
        }}
      >
        {/* Groups Label */}
        <Text
          style={{
            fontSize: 24,
            marginTop: 20,
          }}
        >
          Groups
        </Text>
        {/* Add Group Button */}
        <View style={styles.createGroupContainer}>
          <DropDownPicker
            placeholder="Add Group" //placeholder çalışmıyor buna bakıcam
            items={[
              { label: "Create Group", value: "1" },
              { label: "Join Group", value: "2" },
            ]}
            defaultValue={"1"}
            containerStyle={{ flex: 1 }}
            dropDownStyle={{ borderWidth: 1, borderColor: Colors.blue }}
            labelStyle={{ fontSize: 16, color: "#000000" }}
            onChangeItem={(items) => {
              if (items.value === "1") {
                navigate("CreateGroup");
              } else {
                navigate("JoinGroup");
              }
            }}
            itemStyle={{ justifyContent: "center" }}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {renderGroupList()}
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
  createGroupContainer: {
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.blue,
    width: "40%",
    height: "100%",
  },
  createGroupText: {
    marginTop: "10%",
    marginBottom: "10%",
    color: Colors.blue,
    fontSize: 18,
    textAlign: "center",
  },
});

export default AllGroupsScreen;
