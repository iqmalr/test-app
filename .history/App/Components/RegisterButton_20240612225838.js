import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../assets/Shared/Colors";
import GlobalApi from "../Services/GlobalApi";

const RegisterButton = ({ nama, dob, alamat, email, password }) => {
  const navigation = useNavigation();
  const onPress = async () => {
    try {
      const response = await GlobalApi.registerApi({
        Nama: nama,
        TanggalLahir: dob,
        Alamat: alamat,
        Email: email,
        Password: password,
      });

      if (response.status === 200) {
        console.log("Registrasi berhasil");
        // Arahkan ke layar berikutnya atau tampilkan pesan sukses
        navigation.navigate("Login");
      } else {
        console.log("Registrasi gagal", response);
        // Tampilkan pesan error
      }
    } catch (error) {
      console.error("Registrasi error", error);
      // Tampilkan pesan error
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Daftar</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    padding: 16,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 90,
    alignItems: "center",
    marginTop: 20,
    width: Dimensions.get("screen").width * 0.8,
  },
  buttonText: {
    fontSize: 17,
    color: Colors.white,
  },
};

export default RegisterButton;
