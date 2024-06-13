// App\Components\LoginButton.js
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../assets/Shared/Colors";
import GlobalApi from "../Services/GlobalApi";
const LoginButton = ({ email, password }) => {
  const navigation = useNavigation();
  const onPress = async () => {
    try {
      const response = await GlobalApi.loginApi(email, password);
      console.log("Login response:", response.data.data);
      if (response.data.data.length === 0) {
        Alert.alert("Login Error", "Email or password is incorrect");
        console.log("tidak bisa login");
      } else {
        const user = response.data.data[0].attributes;
        console.log("Login email:", user.Email);
        console.log("Login password:", user.Password);
        if (user.Email === email && user.Password === password) {
          //   Alert.alert("Login Success", "You have successfully logged in");
          console.log("bisa login");
          navigation.navigate("TabNavigation");
          // navigation.navigate("Home", {
          //   screen: "Home",
          //   params: { email: email },
          // });
        } else {
          Alert.alert("Login Error", "Email or password is incorrect");
          console.log("tidak bisa login");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
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
