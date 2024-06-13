import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../assets/Shared/Colors";
// import GlobalApi from "../Services/GlobalApi"; // Komentar dulu API import

const RegisterButton = ({ nama, dob, alamat, email, password }) => {
  const navigation = useNavigation();

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const onPress = async () => {
    const formattedDob = formatDate(new Date(dob));
    const postData = {
      Nama: nama,
      TanggalLahir: formattedDob,
      Alamat: alamat,
      Email: email,
      Password: password,
    };
    console.log("Data yang akan dikirim:", postData);

    // try {
    //   const response = await GlobalApi.registerApi(postData);

    //   if (response.status === 200) {
    //     console.log("Registrasi berhasil");
    //     // Arahkan ke layar berikutnya atau tampilkan pesan sukses
    //     navigation.navigate("Login");
    //   } else {
    //     console.log("Registrasi gagal", response);
    //     // Tampilkan pesan error
    //   }
    // } catch (error) {
    //   console.error("Registrasi error", error);
    //   // Tampilkan pesan error
    // }
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
