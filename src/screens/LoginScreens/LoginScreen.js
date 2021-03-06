import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthLogoButton from "../../components/AuthLogoButton";
import { firebase } from "../../firebase/config";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";
import { showAlert } from "../../components/ShowAlert";
import { navigate } from "../../navigationRef";
import { Colors, customStyles } from "../../styles/index";

const background = require("../../../assets/background.png");

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Login with Firebase
  const onLoginPress = () => {
    if (email === "" || password == "") {
      // In case, password or email is empty
      alert("Enter details to login!");
    } else {
      setIsLoading(true);
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
              navigate("Personal", { user });
              setIsLoading(false);
            })
            .catch((error) => {
              setIsLoading(false);
              showAlert(error);
            });
        })
        .catch((error) => {
          setIsLoading(false);
          showAlert(error);
        });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <View style={{ marginTop: "20%" }}></View>

        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={Colors.blue}
            style={customStyles.loadingIndicator}
          />
        ) : null}

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "position"}
        >
          {/* Login Text and Text Inputs */}
          <View style={styles.inputContainer}>
            <Text style={customStyles.title}>Login</Text>

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
            navigate("ForgotPassword");
          }}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* View of Logo Buttons */}
        <View horizontal style={styles.containerLogo}>
          <AuthLogoButton signInMethod="Google" />
          <AuthLogoButton signInMethod="Facebook" />
          {Platform.OS == "ios" ? (
            <AuthLogoButton signInMethod="Apple" />
          ) : null}
        </View>

        {/* Login Button */}
        <AuthButton text="Login" loading={isLoading} onPress={onLoginPress} />

        {/* navToRegister -> New Here? Register Button. */}
        <View style={styles.navRegisterContainer}>
          <TouchableOpacity
            onPress={() => {
              navigate("Register");
            }}
          >
            <Text style={{ color: Colors.white }}>
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
  forgotPasswordText: {
    color: Colors.blue,
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
