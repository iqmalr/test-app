import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ClinicDetails from "../Screens/ClinicDetails";
import Home from "../Screens/Home";

const Stack = createStackNavigator();

export default function ClinicNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="clinic-detail" component={ClinicDetails} />
    </Stack.Navigator>
  );
}
