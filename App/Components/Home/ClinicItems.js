import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";

export default function ClinicItems({ clinic }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("clinic-detail", { clinicId: clinic.id });
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("clinic-detail", { clinicId: clinic.id })
      }
      style={{ alignItems: "center" }}
    >
      <View
        style={{
          width: 200,
          borderWidth: 1,
          borderColor: Colors.LIGHT_GRAY,
          borderRadius: 10,
          marginRight: 10,
        }}
      >
        <Image
          source={{ uri: clinic.attributes.image.data.attributes.url }}
          style={{
            width: "100%",
            height: 110,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <View style={{ padding: 7 }}>
          <Text style={{ fontFamily: "text_semibold", fontSize: 14 }}>
            {clinic.attributes.Name}
          </Text>
          <Text style={{ fontSize: 12, color: Colors.GRAY }}>
            {clinic.attributes.Address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
