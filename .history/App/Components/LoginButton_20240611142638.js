// App\Components\LoginButton.js
import React from "react";
import { Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../assets/Shared/Colors";
import GlobalApi from "../Services/GlobalApi"; // Import GlobalApi
const LoginButton = ({ email, password }) => {
  const onPress = async () => {
    // Panggil fungsi loginApi
    try {
      const response = await GlobalApi.loginApi(email, password); // Anda perlu menambahkan email dan password ke state atau sebagai argumen
      console.log("Login response:", response.data.data); // Cetak output ke konsol
    } catch (error) {
      console.error("Login error:", error); // Tangani error jika terjadi
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
