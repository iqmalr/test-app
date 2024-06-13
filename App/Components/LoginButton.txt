// App\Components\LoginButton.js
import React from "react";
import { Alert, Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../assets/Shared/Colors";
import GlobalApi from "../Services/GlobalApi"; // Import GlobalApi
const LoginButton = ({ email, password }) => {
  const onPress = async () => {
    // Panggil fungsi loginApi
    try {
      const response = await GlobalApi.loginApi(email, password); // Anda perlu menambahkan email dan password ke state atau sebagai argumen
      console.log("Login response:", response.data.data); // Cetak output ke konsol

      if (response.data.data.length === 0) {
        // Periksa apakah respons array kosong
        Alert.alert("Login Error", "Email or password is incorrect"); // Tampilkan notifikasi
        console.log("tidak bisa login");
      } else {
        const user = response.data.data[0].attributes;
        console.log("Login email:", user.Email); // Cetak output ke konsol
        console.log("Login password:", user.Password); // Cetak output ke konsol

        if (user.Email === email && user.Password === password) {
          // Jika tidak kosong dan email serta password cocok, maka login berhasil
          Alert.alert("Login Success", "You have successfully logged in"); // Tampilkan notifikasi
          console.log("bisa login");
          // Navigasi ke halaman berikutnya
          // navigation.navigate("Home", {
          //   screen: "Home",
          //   params: { email: email },
          // });
        } else {
          Alert.alert("Login Error", "Email or password is incorrect"); // Tampilkan notifikasi
          console.log("tidak bisa login");
        }
      }
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
