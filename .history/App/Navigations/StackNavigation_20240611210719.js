// App\Navigations\StackNavigation.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../Screens/Login";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
}
