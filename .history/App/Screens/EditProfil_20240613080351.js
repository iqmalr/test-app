import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../assets/Shared/Colors"; // Pastikan Colors diimpor dari tempat yang benar
import { UserContext } from "../Context/UserContext";

export default function EditProfile() {
  const { user, updateUser } = useContext(UserContext);
  const navigation = useNavigation();
  const route = useRoute();
  const { dataPasien } = route.params;

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    if (dataPasien) {
      setNama(dataPasien.attributes.Nama || "");
      setEmail(dataPasien.attributes.Email || "");
      setAlamat(dataPasien.attributes.Alamat || "");
    }
  }, [dataPasien]);

  const handleSubmit = () => {
    // Update user's profile
    updateUser({
      ...user,
      Nama: nama,
      Email: email,
      Alamat: alamat,
    });
    // Navigate back to Profile screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={nama}
          onChangeText={setNama}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          value={alamat}
          onChangeText={setAlamat}
          placeholder="Enter your address"
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.BACKGROUND,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: Colors.PRIMARY,
  },
  inputContainer: {
    backgroundColor: Colors.PRIMARY_FOREGROUND,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.GRAY,
    marginTop: 10,
  },
  input: {
    fontSize: 16,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.DARK_TEXT,
    paddingBottom: 5,
  },
  saveButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});
