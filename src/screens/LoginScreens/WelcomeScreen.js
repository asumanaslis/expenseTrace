import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { firebase } from "../../firebase/config";
import AuthButton from "../../components/AuthButton";
import { navigate } from "../../navigationRef";
import { Colors, customStyles } from "../../styles/index";

const background = require("../../../assets/background.png");
const logo = require("../../../assets/logo.png");

const WelcomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Firebase Authentication State Persistence
  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            setIsLoading(false);
            const user = document.data();
            navigate("Personal", user);
          })
          .catch((error) => {
            alert(error.message);
            return;
          });
      } else {
        setIsLoading(false);
        return;
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={Colors.blue}
            style={customStyles.loadingIndicator}
          />
        ) : null}
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Image source={logo} style={styles.logo} />
          <AuthButton
            text="Get Started"
            loading={isLoading}
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
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
  logo: {
    marginRight: "20%",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: "40%",
  },
});

export default WelcomeScreen;
