// App\Components\LoginButton.js
import React from "react";
import { Alert, Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../assets/Shared/Colors";
import GlobalApi from "../Services/GlobalApi"; // Import GlobalApi
const LoginButton = ({ email, password }) => {
  const onPress = async () => {
    try {
      const response = await GlobalApi.loginApi(email, password);
      console.log("Login response:", response.data.data);
      if (response.data === null) {
        console.log("data kosong");
        // Periksa apakah respons array kosong
        // Alert.alert("Login Error", "Email or password is incorrect"); // Tampilkan notifikasi
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login Error", "An error occurred while logging in"); // Tampilkan notifikasi jika terjadi error lainnya
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 16,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 90,
        alignItems: "center",
        marginTop: 20,
        width: Dimensions.get("screen").width * 0.8,
      }}
    >
      <Text style={{ fontSize: 17, color: Colors.white }}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
