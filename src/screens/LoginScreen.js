import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthInput from "../components/AuthInput";
import LogoTouchable from "../components/LogoTouchable";

const background = require("../../assets/background.png");
const google_logo = require("../../assets/google-logo.png");
const apple_logo = require("../../assets/apple-logo.png");
const fb_logo = require("../../assets/fb-logo.png");

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <View style={{ marginTop: "20%" }}></View>
        <Text style={styles.loginText}>Login</Text>
        <AuthInput inputLabel="Email" />
        <AuthInput inputLabel="Password" />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        {/* View of Logo Buttons */}
        <View horizontal style={styles.containerLogo}>
          <LogoTouchable logo={google_logo} />
          <LogoTouchable logo={fb_logo} />
          <LogoTouchable logo={apple_logo} />
        </View>
        {/* Login Button */}
        <View style={styles.loginContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              console.log("Login Button Pressed");
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        {/* navRegister -> New Here? Register Button. */}
        <View style={styles.navRegisterContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={{ color: "white" }}>
              <Text>New Here? </Text>
              <Text style={{ fontWeight: "700" }}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

LoginScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  loginText: {
    paddingTop: 50,
    fontSize: 36,
    marginLeft: 25,
    color: "#2F52E0",
    fontWeight: "700",
  },
  forgotPasswordText: {
    color: "#2F52E0",
    fontWeight: "700",
    alignSelf: "flex-end",
    width: "40%",
    paddingTop: 10,
  },
  containerLogo: {
    justifyContent: "flex-start",
    marginLeft: 25,
    flexDirection: "row",
  },
  loginContainer: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "center",
    bottom: 0,
    right: 0,
  },
  loginButton: {
    height: 50,
    width: 120,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    marginBottom: 40,
    marginRight: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    alignSelf: "center",
    padding: 5,
  },
  navRegisterContainer: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    marginLeft: 25,
    marginBottom: 30,
  },
});

export default LoginScreen;
