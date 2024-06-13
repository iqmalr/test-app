// App\Navigations\ProfileNavigation.js
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import EditProfile from "../Screens/EditProfil";
import Profile from "../Screens/Profile";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}
