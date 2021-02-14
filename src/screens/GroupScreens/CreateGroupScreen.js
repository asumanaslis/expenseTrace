import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Clipboard } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../styles/index";
import uuid from "uuid/v4";
import store from "../../redux/store";
import { useSelector } from "react-redux";
import { groupCreated } from "../../redux/actions";
import { navigate } from "../../navigationRef";

const CreateGroupScreen = ({ navigation }) => {
  const [groupName, setGroupName] = useState("");
  const [groupPassword, setGroupPassword] = useState("");
  const [isGroupCreated, setIsGroupCreated] = useState(false);
  const [groupSubtitle, setGroupSubtitle] = useState("");
  const UUID = uuid();
  const currentUser = useSelector((state) => state.currentUser);

  const checkAreInputsValid = () => {
    // Controls whether Group Name or Password is valid or not
    // TODO: Control için daha fazla seçenek ekle (Şifre en az 6 karakterden oluşmalı vs.)
    if (groupName === "" || groupPassword === "") {
      alert("Fields cannot be empty");
    } else {
      setIsGroupCreated(true);
    }
  };

  const createGroup = () => {
    // Creates the group and adds to redux
    //TODO: Group Subtitle And Date Values
    const data = {
      groupName,
      groupID: UUID,
      groupMembers: [currentUser],
      groupPassword,
      groupSubtitle,
      expenses: [],
    };
    store.dispatch(groupCreated(data));
    navigate("AllGroups");
  };
  const renderGroupID = () => {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text>Your Group ID is Ready Please Copy It:</Text>
        {/* ID Container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* ID Container */}
          <View style={styles.IDContainer}>
            <Text>{UUID}</Text>
          </View>
          {/* ID Copy Button */}
          <View style={styles.IDCopyContainer}>
            <TouchableOpacity
              onPress={() => {
                Clipboard.setString(UUID);
                // TODO: "Copied!" Animasyonu Göster
              }}
            >
              <Text>Copy</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Buttons Container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 50,
          }}
        >
          {/* Cancel Button */}
          <View style={styles.CancelButton}>
            {/* TODO: Cancela basıldığında group name ve password inputlarını
            temizle */}
            <TouchableOpacity onPress={() => setIsGroupCreated(false)}>
              <Text
                style={{ fontSize: 16, color: Colors.white, fontWeight: "600" }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          {/* Continue Button */}
          <View style={styles.groupCreatedButton}>
            <TouchableOpacity onPress={createGroup}>
              <Text
                style={{ fontSize: 16, color: Colors.white, fontWeight: "600" }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ alignItems: "center", flex: 1, backgroundColor: "#fff" }}
    >
      <Text
        style={{
          fontSize: 24,
          marginTop: 20,
          marginBottom: 50,
        }}
      >
        Create Group
      </Text>

      {/* Group Name Container */}
      <Text style={{ alignSelf: "flex-start", fontSize: 18, marginLeft: 5 }}>
        Group Name
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          editable={!isGroupCreated}
          placeholder="Group Name"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(newGroupName) => setGroupName(newGroupName)}
        />
      </View>

      {/* Group Subtitle Container */}
      <Text
        style={{
          alignSelf: "flex-start",
          fontSize: 18,
          marginLeft: 5,
          marginTop: 50,
        }}
      >
        Group Subtitle
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          editable={!isGroupCreated}
          placeholder="Group Subtitle"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(newGroupSubtitle) =>
            setGroupSubtitle(newGroupSubtitle)
          }
        />
      </View>

      {/* Group Password Container */}
      <Text
        style={{
          alignSelf: "flex-start",
          fontSize: 18,
          marginLeft: 5,
          marginTop: 50,
        }}
      >
        Group Password
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          editable={!isGroupCreated}
          placeholder="Group Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(newGroupPassword) =>
            setGroupPassword(newGroupPassword)
          }
        />
      </View>

      {/* Create Group Button */}
      <View style={styles.buttonContainer(isGroupCreated)}>
        <TouchableOpacity
          onPress={checkAreInputsValid}
          disabled={isGroupCreated}
        >
          <Text
            style={{ fontSize: 16, color: Colors.white, fontWeight: "600" }}
          >
            Create Group
          </Text>
        </TouchableOpacity>
      </View>

      {/* Call When Group is Created */}
      {isGroupCreated ? renderGroupID() : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.blue,
    width: "90%",
    height: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: (isGroupCreated) => {
    return {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: Colors.blue,
      width: "90%",
      height: "7%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: Colors.blue,
      opacity: isGroupCreated ? 0.2 : 1,
    };
  },
  groupCreatedButton: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.blue,
    width: "40%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    margin: 70,
    backgroundColor: Colors.blue,
  },
  CancelButton: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.lightGrey,
    width: "40%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    margin: 70,
    backgroundColor: Colors.lightGrey,
  },
  IDContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.lightGrey,
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: Colors.lightGrey,
    flex: 2 / 3,
    marginHorizontal: 5,
  },
  IDCopyContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.lightGrey,
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: Colors.lightGrey,
    flex: 1 / 3,
    marginHorizontal: 5,
  },
});

export default CreateGroupScreen;
