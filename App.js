import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";

const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
