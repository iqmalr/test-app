import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../../assets/Shared/Colors";
import { UserContext } from "../../Context/UserContext";

export default function LogoutButton() {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    console.log("Logout");
    setUser(null);
    navigation.navigate("Login");
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
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
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});
