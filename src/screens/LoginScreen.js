import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LogoTouchable from "../components/LogoTouchable";
import { firebase } from "../firebase/config";
import { WHITE, BLUE } from "../styles/colors";
import AuthInput from "../components/AuthInput";

const background = require("../../assets/background.png");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login with Firebase
  const onLoginPress = () => {
    if (email === "" || password == "") {
      // In case, password or email is empty
      alert("Enter details to login!");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid;
          const usersRef = firebase.firestore().collection("users");
          usersRef
            .doc(uid)
            .get()
            .then((firestoreDocument) => {
              if (!firestoreDocument.exists) {
                alert("User does not exist anymore.");
                return;
              }
              const user = firestoreDocument.data();
              navigation.navigate("Home", { user });
            })
            .catch((error) => {
              alert(error);
            });
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
          behavior={Platform.OS == "ios" ? "padding" : "position"}
        >
          {/* Login Text and Text Inputs */}
          <View style={styles.inputContainer}>
            <Text style={styles.loginText}>Login</Text>

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

        {/* Forget Password? Touchable Label */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* View of Logo Buttons */}
        <View horizontal style={styles.containerLogo}>
          <LogoTouchable signInMethod="Google" />
          <LogoTouchable signInMethod="Facebook" />
          {Platform.OS == "ios" ? <LogoTouchable signInMethod="Apple" /> : null}
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
            <Text style={{ color: WHITE }}>
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
    color: BLUE,
    fontWeight: "700",
  },
  forgotPasswordText: {
    color: BLUE,
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
  inputContainer: {
    marginTop: "25%",
    justifyContent: "space-between",
  },
});

export default LoginScreen;
