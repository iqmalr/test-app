import React, { useContext } from "react";
import { Text, View } from "react-native";
import LogoutButton from "../Components/Shared/LogoutButton";
import { UserContext } from "../Context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  return (
    <View>
      <Text>Profile</Text>
      <Text>{user.Nama}</Text>
      <Text>{user.Email}</Text>
      <Text>{user.DateOfBirth}</Text>
      <LogoutButton />
    </View>
  );
}
