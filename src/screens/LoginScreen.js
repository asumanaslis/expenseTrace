import React, { useState } from "react";
import { Platform } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LogoTouchable from "../components/LogoTouchable";
import { firebase } from "../firebase/config";

const background = require("../../assets/background.png");
const google_logo = require("../../assets/google-logo.png");
const apple_logo = require("../../assets/apple-logo.png");
const fb_logo = require("../../assets/fb-logo.png");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    if (email === "" || password == "") {
      // In case, password or email is empty
      alert("Enter details to login!");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <View style={{ marginTop: "20%" }}></View>

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          {/* Login Text and Text Inputs */}
          <Text style={styles.loginText}>Login</Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(newEmail) => setEmail(newEmail)}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={(newPassword) => setPassword(newPassword)}
            />
          </View>
        </KeyboardAvoidingView>

        {/* Forget Password? Touchable Label */}
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
          <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* navToRegister -> New Here? Register Button. */}
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
  inputContainer: {
    marginTop: 25,
    marginLeft: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#2F52E0",
    borderRadius: 10,
    width: "80%",
    height: 35,
  },
  inputText: {
    color: "#2F52E0",
    fontSize: 14,
  },
});

export default LoginScreen;
