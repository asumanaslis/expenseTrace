import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { firebase } from "../firebase/config";

const HomeScreen = ({ navigation }) => {
  const name = navigation.getParam("name");

  const onLogoutPress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Welcome");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={{ marginTop: 200 }}>
      <Text>Home Screen!!!</Text>
      <Text>Welcome! {name}</Text>
      <Button title="Log Out" onPress={onLogoutPress} />
    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default HomeScreen;
