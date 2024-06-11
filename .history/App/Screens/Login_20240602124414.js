import React from "react";
import { Image, StyleSheet, View } from "react-native";
const demo = require("../../assets/images/demo.jpg");
export default function Login() {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Image source={demo} style={styles.appImage} />

    </View>
  );
}
const styles = StyleSheet.create({
  appImage: {
    //   width: 400,
    height: 700,
objectFit: 'cover',
    // marginTop: 10,
  },

});
