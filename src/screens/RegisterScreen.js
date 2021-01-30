import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { firebase } from "../firebase/config";
import AuthLogoButton from "../components/AuthLogoButton";
import { WHITE } from "../styles/colors";
import AuthInput from "../components/AuthInput";
import { customStyles } from "../styles/customStyles";
import AuthButton from "../components/AuthButton";

const background = require("../../assets/background.png");

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onRegisterPress = () => {
    setIsLoading(true);
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
        setIsLoading(true);
      })
      .catch((error) => {
        // Email address already in use || The password must be 6 characters long or more.
        const { code, message } = error;
        alert(message);
        setIsLoading(true);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <View style={{ marginTop: "30%" }}></View>

        {isLoading ? (
          <ActivityIndicator
            size="large"
            style={customStyles.loadingIndicator}
          />
        ) : null}

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "position"}
        >
          {/* Register Container */}
          <View style={styles.registerContainer}>
            {/* Register Label */}
            <Text style={customStyles.title}>Register</Text>

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
          <AuthLogoButton signInMethod="Google" />
          <AuthLogoButton signInMethod="Facebook" />
          {Platform.OS == "ios" ? (
            <AuthLogoButton signInMethod="Apple" />
          ) : null}
        </View>

        {/* Register Button */}
        <AuthButton
          text="Register"
          loading={isLoading}
          onPress={onRegisterPress}
        />

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
