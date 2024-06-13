// App\Screens\Register.js
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../assets/Shared/Colors";
import RegisterButton from "../Components/RegisterButton";
const demo = require("../../assets/images/demo.jpg");
export default function Register() {
  const [password, setPassword] = useState("");
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: Colors.white,
          width: "100%",
          padding: 25,
          alignItems: "center",
          marginTop: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={styles.heading}>Daftar</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Isi data dengan benar
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nama Lengkap"
          value={nama}
          onChangeText={setNama}
          style={styles.input}
        />
        <TextInput
          placeholder="Tanggal Lahir"
          value={dob} // date of birth
          onChangeText={setDob}
          style={styles.input}
        />
        <TextInput
          placeholder="Alamat"
          value={alamat} // date of birth
          onChangeText={setAlamat}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <RegisterButton email={email} password={password} />
      <View style={{ marginTop: 20 }}>
        <Button
          title="Belum punya akun? Mau daftar?"
          onPress={() => console.log("Daftar")}
        />
      </View>
      {/* <SignInWithOAuth /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  appImage: {
    height: 300,
    // width: 500,
    objectFit: "cover",
    // marginTop: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  inputContainer: {
    width: "80%",
    marginTop: 20,
  },
});
