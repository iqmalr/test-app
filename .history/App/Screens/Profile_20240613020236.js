// App\Screens\Profile.js
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../assets/Shared/Colors"; // Pastikan Colors diimpor dari tempat yang benar
import LogoutButton from "../Components/Shared/LogoutButton";
import { UserContext } from "../Context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();
  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tidak ada data pengguna.</Text>
      </View>
    );
  }
  const navigateToEditProfile = () => {
    navigation.navigate("EditProfile");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.Nama}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.Email}</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{user.Alamat}</Text>

        <Text style={styles.label}>Date of Birth:</Text>
        <Text style={styles.value}>{user.DateOfBirth}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigateToEditProfile()} // Ganti dengan nama layar edit profil yang sesuai
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <LogoutButton />
        {/* <TouchableOpacity
          style={styles.editButton2}
          onPress={() => navigation.navigate("EditProfile")} // Ganti dengan nama layar edit profil yang sesuai
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity> */}
      </View>
      {/* <LogoutButton style={styles.logoutButton} /> */}
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
  profileContainer: {
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
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.DARK_TEXT,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  editButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  editButton2: {
    backgroundColor: Colors.RED,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },

  logoutButton: {
    flex: 1,
    marginLeft: 10,
  },
});
