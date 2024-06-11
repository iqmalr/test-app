import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../assets/Shared/Colors";
const demo = require("../../assets/images/demo.jpg");
export default function Login() {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Image source={demo} style={styles.appImage} />
      <View
        style={{
          backgroundColor: Colors.white,
          width: "100%",
          padding: 25,
          alignItems: "center",
          marginTop: -50,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={styles.heading}>Wonosobo</Text>
        <Text style={styles.heading}>Hospital Appointment </Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Book Appointments Effortlessly and manager your health journey
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appImage: {
    //   width: 400,
    height: 700,
    objectFit: "cover",
    // marginTop: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
