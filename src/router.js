import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen Components
import GroupPage from "./screens/groupsPage/GroupPage";
import Page from "./screens/groupsPage/page1";
import categoryExpenseGroup from "./screens/expenseScreens/categoryExpenseGroup"

//components
import { BottomNavigator } from "./components/customBottomTabBar";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Router = (props) => {
    const TabScreens = () => (
        <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
            <Tab.Screen name="GroupPage" component={GroupPage} />
            <Tab.Screen name="Page1" component={Page} />
            <Tab.Screen name="Home" component={TabScreens} />
            <Tab.Screen name="categoryExpenseGroup" component={categoryExpenseGroup} />
        </Tab.Navigator>
    );

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GroupPage">
                <Stack.Screen
                    name="GroupPage"
                    component={GroupPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Page1"
                    component={Page}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="categoryExpenseGroup"
                    component={categoryExpenseGroup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={TabScreens}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
