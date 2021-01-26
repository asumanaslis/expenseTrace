/*
Google, Facebook and Apple Buttons for Login and Register screens
*/

import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import * as Google from "expo-google-app-auth";
import { firebase } from "../firebase/config";
import * as Facebook from "expo-facebook";

const google_logo = require("../../assets/google-logo.png");
const apple_logo = require("../../assets/apple-logo.png");
const fb_logo = require("../../assets/fb-logo.png");

const AuthLogoButton = ({ signInMethod }) => {
  const logoCases = {
    Google: google_logo,
    Facebook: fb_logo,
    Apple: apple_logo,
  };

  const logo = logoCases[signInMethod];

  // SIGN IN WITH GOOGLE, FACEBOOK, APPLE

  const onSignInPressed = () => {
    if (signInMethod === "Google") {
      // Login With Google
      const isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (
              providerData[i].providerId ===
                firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
              providerData[i].uid === googleUser.getBasicProfile().getId()
            ) {
              // We don't need to reauth the Firebase connection.
              return true;
            }
          }
        }
        return false;
      };

      const onSignIn = (googleUser) => {
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
          unsubscribe();
          // Check if we are already signed-in Firebase with the correct user.
          if (!isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            var credential = firebase.auth.GoogleAuthProvider.credential(
              googleUser.idToken,
              googleUser.accessToken
            ); //googleUser.getAuthResponse().id_token

            // Sign in with credential from the Google user.
            firebase
              .auth()
              .signInWithCredential(credential)
              .then((response) => {
                const uid = response.user.uid;
                const user = {
                  id: uid,
                  email: response.additionalUserInfo.profile.email,
                  name: response.additionalUserInfo.profile.name,
                };

                firebase.firestore().collection("users").doc(uid).set(user);
              })
              .catch((error) => {
                alert(error);
              });
          } else {
            console.log("User already signed-in Firebase.");
          }
        });
      };

      const signInWithGoogle = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId:
              "357863128436-1drgpt9ipht8fbi6f1u3fh83rp448git.apps.googleusercontent.com",
            iosClientId:
              "357863128436-klr6ujrjl8ab7p5q814abparf5je8166.apps.googleusercontent.com",
            scopes: ["profile", "email"],
          });

          if (result.type === "success") {
            onSignIn(result);
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          alert(e);
        }
      };

      signInWithGoogle();
    } else if (signInMethod === "Facebook") {
      const onFacebookLoginPress = async () => {
        try {
          await Facebook.initializeAsync({
            appId: "422581495718758",
          });
          const result = await Facebook.logInWithReadPermissionsAsync({
            permissions: ["public_profile", "email"],
          });

          if (result.type === "success") {
            const credential = firebase.auth.FacebookAuthProvider.credential(
              result.token
            );

            const userCredential = await firebase
              .auth()
              .signInWithCredential(credential)
              .then((resp) => {
                const user = {
                  name: resp.user.displayName,
                  email: resp.user.email,
                  id: resp.user.uid,
                };
                firebase.firestore().collection("users").doc(user.id).set(user);
              })
              .catch((err) => {
                alert(err);
              });
          } else {
            // type === 'cancel'
          }
        } catch (err) {
          alert(err);
        }
      };
      onFacebookLoginPress();
    } else if (signInMethod === "Apple") {
      return console.log("apple");
    }
  };

  return (
    <TouchableOpacity onPress={onSignInPressed}>
      <Image source={logo} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: "cover",
  },
});

export default AuthLogoButton;
