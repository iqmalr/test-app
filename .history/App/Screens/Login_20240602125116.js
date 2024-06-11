import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
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
          marginTop: -100,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={styles.heading}>RSUD Wonosobo</Text>
        <Text style={styles.heading}>Hospital Appointment App</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Easy Booking Appointment and manage your health journey
        </Text>
        <View
          style={{
            padding: 16,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 90,
            alignItems: "center",
            marginTop: 20,
            width: Dimensions.get("screen").width * 0.8,
          }}
        >
          <Text style={{ fontSize: 17, color: Colors.white }}>
            Login With Google
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appImage: {
    //   width: 400,
    height: 700,
    objectFit: "cover",
    marginTop: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
