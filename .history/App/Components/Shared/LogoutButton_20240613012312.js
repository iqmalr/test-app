import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";

export default function LogoutButton() {
  // const { signOut } = useClerk();
  const navigation = useNavigation();

  const handleLogout = async () => {
    console.log("Logout");
    // try {
    //   await signOut();
    //   navigation.navigate("Login");
    // } catch (error) {
    //   console.error("Failed to log out", error);
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    backgroundColor: Colors.BACKGROUND,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: Colors.RED,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});
