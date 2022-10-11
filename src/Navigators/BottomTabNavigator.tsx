import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "../Components/TabBar";
import React from "react";
import { Text, View } from "react-native";
import { HomeIcon, MenuIcon, PlusIcon } from "../Icons/TabBarIcons";
import PlusButton from "../Components/PlusButton";
import NewsCard from "../Components/NewsCard";
import News from "../Screens/News";

const MainStack = createBottomTabNavigator();



export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        tabBar={props => <TabBar {...props} />}
        initialRouteName="News"
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
          name="Profile"
          component={News}
          options={{ tabBarIcon: <MenuIcon /> }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
