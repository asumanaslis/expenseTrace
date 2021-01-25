import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Text,
  Image,
} from "react-native";
import { WHITE, BLUE } from "../styles/colors";
import AuthInput from "../components/AuthInput";

const background = require("../../assets/background.png");
const arrow_icon = require("../../assets/arrow-icon.png");

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        {/* Go Back */}
        <View horizontal style={styles.goBackContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Image source={arrow_icon} style={styles.image} />
          </TouchableOpacity>
        </View>

        {/* Reset Password Label */}
        <Text style={styles.resetPasswordText}>Reset Password</Text>

        {/* Input Box */}

        <AuthInput
          inputLabel="Enter Email"
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
        />
        {/* Send Request Button */}
        <View style={styles.sendReqContainer}>
          <TouchableOpacity
            style={styles.sendReqButton}
            onPress={() => {
              alert(email);
            }}
          >
            <Text style={styles.buttonText}>Send Request</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

ForgotPasswordScreen.navigationOptions = () => {
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
  goBackContainer: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 50,
    top: 25,
    left: 25,
    justifyContent: "flex-start",
  },
  image: {
    width: 25,
    height: 20,
    resizeMode: "contain",
  },
  input: {
    borderWidth: 1,
    borderColor: BLUE,
    borderRadius: 10,
    width: "80%",
    height: 35,
  },

  sendReqContainer: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "center",
    bottom: 0,
    right: 0,
  },
  sendReqButton: {
    height: 50,
    width: 170,
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
  resetPasswordText: {
    paddingTop: 50,
    fontSize: 36,
    marginLeft: 25,
    color: BLUE,
    fontWeight: "700",
  },
});

export default ForgotPasswordScreen;
