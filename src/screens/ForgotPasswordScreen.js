import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  Image,
} from "react-native";
import AuthInput from "../components/AuthInput";
import { customStyles } from "../styles/customStyles";
import AuthButton from "../components/AuthButton";

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
        <Text style={customStyles.title}>Reset Password</Text>

        {/* Input Box */}
        <AuthInput
          inputLabel="Enter Email"
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
        />

        {/* Send Request Button */}
        <AuthButton
          text="Send Request"
          onPress={() => {
            alert(email);
          }}
        />
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
});

export default ForgotPasswordScreen;
