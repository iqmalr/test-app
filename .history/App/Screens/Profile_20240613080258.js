import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../assets/Shared/Colors"; // Pastikan Colors diimpor dari tempat yang benar
import LogoutButton from "../Components/Shared/LogoutButton";
import { UserContext } from "../Context/UserContext";
import GlobalApi from "../Services/GlobalApi";

export default function Profile() {
  const { user } = useContext(UserContext);
  const [dataPasien, setDataPasien] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      if (user?.Email) {
        getUserDataa();
      }
    }, [user?.Email])
  );

  const getUserDataa = async () => {
    setLoading(true);
    try {
      const response = await GlobalApi.getUserData(user.Email);
      if (response.data && response.data.data.length > 0) {
        setDataPasien(response.data.data[0]);
      } else {
        setError("Tidak ada data pengguna.");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat mengambil data pengguna.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{error}</Text>
      </View>
    );
  }

  if (!dataPasien) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tidak ada data pengguna.</Text>
      </View>
    );
  }

  const navigateToEditProfile = () => {
    navigation.navigate("EditProfile", { dataPasien });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{dataPasien.attributes.Nama}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{dataPasien.attributes.Email}</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{dataPasien.attributes.Alamat}</Text>

        <Text style={styles.label}>Date of Birth:</Text>
        <Text style={styles.value}>{dataPasien.attributes.DateOfBirth}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigateToEditProfile()}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <LogoutButton />
      </View>
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
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
  logoutButton: {
    flex: 1,
    marginLeft: 10,
  },
});
