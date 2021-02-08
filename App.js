import React from "react";
import { View, Image } from "react-native";
import { TAB_BAR } from "./src/styles/colors";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import PersonalScreen from "./src/screens/PersonalScreen";
import GroupScreen from "./src/screens/GroupScreen";
import { setNavigator } from "./src/navigationRef";
import AddExpenseScreen from "./src/screens/AddExpenseScreen";
import PersonalCategoryScreen from "./src/screens/PersonalCategoryScreen";

const PersonalStack = createStackNavigator({
  Personal: {
    screen: PersonalScreen,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  PersonalCategory: {
    screen: PersonalCategoryScreen,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
});

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    ForgotPassword: ForgotPasswordScreen,
  }),

  mainFlow: createBottomTabNavigator(
    {
      Personal: {
        screen: PersonalStack,
        navigationOptions: {
          tabBarIcon: () => {
            const img = require("./assets/bottomTabAssets/personal-icon.png");
            return <Image source={img} style={{ height: 22.5, width: 22.5 }} />;
          },
        },
      },
      AddExpense: {
        screen: AddExpenseScreen,
        navigationOptions: {
          tabBarIcon: () => {
            const img = require("./assets/bottomTabAssets/add-icon.png");
            return (
              <Image
                source={img}
                style={{
                  height: 50,
                  width: 50,
                  resizeMode: "contain",
                  position: "absolute",
                  top: -13,
                }}
              />
            );
          },
        },
      },
      Group: {
        screen: GroupScreen,
        navigationOptions: {
          tabBarIcon: () => {
            const img = require("./assets/bottomTabAssets/group-icon.png");
            return (
              <Image
                source={img}
                style={{ height: 30, width: 22.5, resizeMode: "contain" }}
              />
            );
          },
        },
      },
    },
    {
      tabBarOptions: {
        showLabel: false,
        style: {
          backgroundColor: TAB_BAR,
          borderTopWidth: 0,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          elevation: 0,
        },
      },
    }
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return <App ref={(navigator) => setNavigator(navigator)} />;
};
