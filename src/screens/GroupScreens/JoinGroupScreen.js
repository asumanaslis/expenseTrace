import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../styles/index";

const JoinGroupScreen = ({ navigation }) => {
  const [groupID, setgroupID] = useState("");
  const [groupPassword, setGroupPassword] = useState("");
  const joinGroup = () => {
    if (groupID === "" || groupPassword === "") {
      alert("Fields cannot be empty");
    } else {
      //Join to a group
    }
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
        Join Group
      </Text>

      {/* Group ID Container */}
      <Text style={{ alignSelf: "flex-start", fontSize: 18, marginLeft: 5 }}>
        Group ID
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Group ID"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(newgroupID) => setgroupID(newgroupID)}
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
          placeholder="Group Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(newGroupPassword) =>
            setGroupPassword(newGroupPassword)
          }
        />
      </View>

      {/* Join Group Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={joinGroup}>
          <Text
            style={{ fontSize: 16, color: Colors.white, fontWeight: "600" }}
          >
            Join Group
          </Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.blue,
    width: "90%",
    height: "7%",
    alignItems: "center",
    justifyContent: "center",
    margin: 70,
    backgroundColor: Colors.blue,
  },
});

export default JoinGroupScreen;
