import React, { useEffect } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Platform,
} from "react-native";
import { firebase } from "../firebase/config";
import { WHITE } from "../styles/colors";

const background = require("../../assets/background.png");
const logo = require("../../assets/logo.png");

const WelcomeScreen = ({ navigation }) => {
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
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
  button: {
    width: "40%",
    height: Platform.OS == "ios" ? "5.5%" : "7%",
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 5,
    marginBottom: 40,
    marginRight: 20,
  },
  buttonText: {
    color: WHITE,
    fontSize: 24,
    alignSelf: "center",
    padding: 5,
  },
});

export default WelcomeScreen;
