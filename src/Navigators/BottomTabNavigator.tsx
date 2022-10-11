import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "../Components/TabBar";
import React from "react";
import { Text, View } from "react-native";
import { HomeIcon, MenuIcon, PlusIcon } from "../Icons/TabBarIcons";
import PlusButton from "../Components/PlusButton";

const MainStack = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Text>
      <Text>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Text>
      <Text>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Text>
      <Text>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Text>
      <Text>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Text>
    </View>
  );
}

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        tabBar={props => <TabBar {...props} />}
        initialRouteName="Home"
      >
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: <HomeIcon /> }}
        />
        <MainStack.Screen
          name="Create"
          component={HomeScreen}
          options={{
            tabBarIcon: <PlusButton />,
            tabBarLabel: "",
            tabBarIconStyle: { bottom: 15 },
          }}
        />
        <MainStack.Screen
          name="Profile"
          component={HomeScreen}
          options={{ tabBarIcon: <MenuIcon /> }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
