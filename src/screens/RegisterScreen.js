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
        const data = {
          id: uid,
          email,
          name,
        };
        firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("Home", { user: data });
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
        <View style={{ marginTop: "20%" }}></View>

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          {/* Register Label */}
          <Text style={styles.registerText}>Register</Text>

          {/* Full Name Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Full Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={name}
              onChangeText={(newName) => setName(newName)}
            />
          </View>

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

        {/* Register Button */}
        <View style={styles.registerContainer}>
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
            <Text style={{ color: "white" }}>
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
    color: "#2F52E0",
    fontWeight: "700",
  },
  registerText: {
    paddingTop: 50,
    fontSize: 36,
    marginLeft: 25,
    color: "#2F52E0",
    fontWeight: "700",
  },
  registerContainer: {
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

export default RegisterScreen;
