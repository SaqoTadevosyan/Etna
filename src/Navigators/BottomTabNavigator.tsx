import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import PlusButton from "../Components/PlusButton";
import TabBar from "../Components/TabBar";
import { HomeIcon, MenuIcon } from "../Icons/TabBarIcons";
import News from "../Screens/News";
import ProfileNavigator from "./ProfileNavigator";
import NewsReader from "../Screens/NewsReader";

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
          component={NewsReader}
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
