import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { firebase } from "../firebase/config";
import LogoTouchable from "../components/LogoTouchable";
import { WHITE, BLUE } from "../styles/colors";
import AuthInput from "../components/AuthInput";

const background = require("../../assets/background.png");

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onRegisterPress = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const user = {
          id: uid,
          email,
          name,
        };
        firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set(user)
          .then(() => {
            navigation.navigate("Home", { user });
          })
          .catch((error) => {
            const { code, message } = error;
            alert(error);
          });
      })
      .catch((error) => {
        // Email address already in use || The password must be 6 characters long or more.
        const { code, message } = error;
        alert(message);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <View style={{ marginTop: "30%" }}></View>

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "position"}
        >
          {/* Full Name Input */}
          <View style={styles.registerContainer}>
            {/* Register Label */}
            <Text style={styles.registerText}>Register</Text>

            {/* Full Name Input */}
            <AuthInput
              inputLabel="Full Name"
              autoCapitalize="none"
              autoCorrect={false}
              value={name}
              onChangeText={(newName) => setName(newName)}
            />

            {/* Email Input */}
            <AuthInput
              inputLabel="Email"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(newEmail) => setEmail(newEmail)}
            />

            {/* Password Input */}
            <AuthInput
              inputLabel="Password"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={(newPassword) => setPassword(newPassword)}
            />
          </View>
        </KeyboardAvoidingView>

        {/* Google Facebook Apple Sign In */}
        <View horizontal style={styles.containerLogo}>
          <LogoTouchable signInMethod="Google" />
          <LogoTouchable signInMethod="Facebook" />
          {Platform.OS == "ios" ? <LogoTouchable signInMethod="Apple" /> : null}
        </View>

        {/* Register Button */}
        <View style={styles.registerButtonContainer}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => {
              onRegisterPress();
            }}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        {/* navToLogin -> Already member? Login */}
        <View style={styles.navRegisterContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: WHITE }}>
              <Text>Already Member? </Text>
              <Text style={{ fontWeight: "700" }}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

RegisterScreen.navigationOptions = () => {
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
    color: BLUE,
    fontWeight: "700",
  },
  registerText: {
    paddingTop: 50,
    fontSize: 36,
    marginLeft: 25,
    color: BLUE,
    fontWeight: "700",
  },
  registerButtonContainer: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "center",
    bottom: 0,
    right: 0,
  },
  registerButton: {
    height: 50,
    width: 120,
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
  navRegisterContainer: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    marginLeft: 25,
    marginBottom: "4%",
  },
  registerContainer: {
    marginTop: "25%",
    justifyContent: "space-between",
  },
  containerLogo: {
    justifyContent: "flex-start",
    marginLeft: 25,
    flexDirection: "row",
    marginBottom: "10%",
    marginTop: 10,
  },
});

export default RegisterScreen;
