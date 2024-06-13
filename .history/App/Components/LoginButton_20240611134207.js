import React from "react";
import { Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../assets/Shared/Colors";

const LoginButton = ({ onPress }) => {
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
