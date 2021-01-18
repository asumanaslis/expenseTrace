import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const image = require("../../assets/background.png");

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
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
  button: {
    width: "40%",
    height: 50,
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    marginBottom: 20,
    marginRight: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    alignSelf: "center",
    padding: 5,
  },
});

export default WelcomeScreen;
