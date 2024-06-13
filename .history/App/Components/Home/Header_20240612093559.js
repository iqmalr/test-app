import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";
import { UserContext } from "../../Context/UserContext";
export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 7,
          alignItems: "center",
        }}
      >
        {/* <Image
          source={{ uri: user.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        /> */}
        <View>
          <Text style={{ fontSize: 14, fontFamily: "text_regular" }}>
            Hello,
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "text_bold" }}>
            {user.Nama}
          </Text>
        </View>
      </View>
      {/* <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <Ionicons name="notifications-circle-outline" size={28} color="black" />
      </Animated.View> */}

      <Ionicons name="notifications-outline" size={24} color={Colors.BLACK} />
    </View>
  );
}
