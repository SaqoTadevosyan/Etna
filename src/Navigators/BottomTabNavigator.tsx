import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "../Components/TabBar";
import React from "react";
import { HomeIcon, MenuIcon } from "../Icons/TabBarIcons";
import PlusButton from "../Components/PlusButton";
import News from "../Screens/News";
import ProfileNavigator from "./ProfileNavigator";

const MainStack = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        tabBar={props => <TabBar {...props} />}
        initialRouteName="News"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen
          name="News"
          component={News}
          options={{ tabBarIcon: <HomeIcon /> }}
        />
        <MainStack.Screen
          name="Create"
          component={News}
          options={{
            tabBarIcon: <PlusButton />,
            tabBarLabel: "",
            tabBarIconStyle: { bottom: 15 },
          }}
        />
        <MainStack.Screen
          name="ProfileStack"
          component={ProfileNavigator}
          options={{ tabBarIcon: <MenuIcon />, tabBarLabel: "Profile" }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
