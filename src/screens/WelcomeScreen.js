import React, { useEffect } from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { firebase } from "../firebase/config";
import AuthButton from "../components/AuthButton";

const background = require("../../assets/background.png");
const logo = require("../../assets/logo.png");

const WelcomeScreen = ({ navigation }) => {
  // Firebase Authentication State Persistence
  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const user = document.data();
            navigation.navigate("Home", user);
          })
          .catch((error) => {
            return;
          });
      } else {
        return;
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Image source={logo} style={styles.logo} />
          <AuthButton
            text="Get Started"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

WelcomeScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    marginRight: "20%",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: "40%",
  },
});

export default WelcomeScreen;
