// App\Navigations\StackNavigation.js
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../Screens/Login";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
}
