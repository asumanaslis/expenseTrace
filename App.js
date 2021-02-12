import React from "react";
import { Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import WelcomeScreen from "./src/screens/LoginScreens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreens/LoginScreen";
import RegisterScreen from "./src/screens/LoginScreens/RegisterScreen";
import ForgotPasswordScreen from "./src/screens/LoginScreens/ForgotPasswordScreen";
import PersonalScreen from "./src/screens/PersonalScreens/PersonalScreen";
import GroupScreen from "./src/screens/GroupScreens/GroupScreen";
import { setNavigator } from "./src/navigationRef";
import AddExpenseScreen from "./src/screens/AddExpenseScreen";
import PersonalCategoryScreen from "./src/screens/PersonalScreens/PersonalCategoryScreen";
import AllGroupsScreen from "./src/screens/GroupScreens/AllGroupsScreen";
import GroupMemberScreen from "./src/screens/GroupScreens/GroupMemberScreen";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import GroupCategoryScreen from "./src/screens/GroupScreens/GroupCategoryScreen";
import { Colors } from "./src/styles/index";

const PersonalStack = createStackNavigator(
  {
    Personal: {
      screen: PersonalScreen,
    },
    PersonalCategory: {
      screen: PersonalCategoryScreen,
    },
  },
  {
    headerMode: "none",
  }
);

const GroupStack = createStackNavigator(
  {
    Group: {
      screen: GroupScreen,
    },
    AllGroups: {
      screen: AllGroupsScreen,
    },
    GroupMember: {
      screen: GroupMemberScreen,
    },
    GroupCategory: {
      screen: GroupCategoryScreen,
    },
  },
  {
    headerMode: "none",
  }
);

const AddExpenseStack = createStackNavigator(
  {
    AddExpense: {
      screen: AddExpenseScreen,
    },
  },
  {
    headerMode: "none",
    mode: "modal",
  }
);

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
        screen: AddExpenseStack,
        navigationOptions: {
          tabBarIcon: () => {
            const img = require("./assets/bottomTabAssets/add-icon.png");
            return (
              <Image
                source={img}
                style={{
                  backgroundColor: Colors.tabBar,
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
        screen: GroupStack,
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
          backgroundColor: Colors.tabBar,
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
  return (
    <Provider store={store}>
      <App ref={(navigator) => setNavigator(navigator)} />
    </Provider>
  );
};
