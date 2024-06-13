import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from "react-native-date-picker"; // Import DatePicker
import Colors from "../../assets/Shared/Colors";
import RegisterButton from "../Components/RegisterButton";

const Register = () => {
  const [nama, setNama] = useState("");
  const [dob, setDob] = useState(new Date()); // Use Date object for date of birth
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleDateChange = (date) => {
    setDob(date);
    setIsDatePickerOpen(false); // Close the date picker
  };
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Daftar</Text>
        <Text style={styles.subHeading}>Isi data dengan benar</Text>
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
          value={dob.toDateString()} // Display date as string
          onFocus={() => setIsDatePickerOpen(true)} // Open date picker on focus
          style={styles.input}
        />
        <TextInput
          placeholder="Alamat"
          value={alamat}
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
      <RegisterButton
        nama={nama}
        dob={dob}
        alamat={alamat}
        email={email}
        password={password}
      />
      <View style={{ marginTop: 20 }}>
        <Button
          title="Sudah punya akun? Masuk"
          onPress={() => navigation.navigate("Login")} // Navigate to Login screen
        />
      </View>
      <DatePicker
        modal
        open={isDatePickerOpen}
        date={dob}
        mode="date"
        onConfirm={handleDateChange}
        onCancel={() => setIsDatePickerOpen(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.white,
    width: "100%",
    padding: 25,
    alignItems: "center",
    marginTop: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subHeading: {
    textAlign: "center",
    marginTop: 20,
  },
  inputContainer: {
    width: "80%",
    marginTop: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default Register;
