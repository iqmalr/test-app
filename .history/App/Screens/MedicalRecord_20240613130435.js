import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import MedicalRecordCard from "../Components/MedicalRecord/MedicalRecordCard";
import PageHeader from "../Components/Shared/PageHeader";
import { UserContext } from "../Context/UserContext";
import GlobalApi from "../Services/GlobalApi";

export default function MedicalRecord() {
  // const { isLoaded, isSignedIn, user } = useUser();
  const { user } = useContext(UserContext);
  const [medicalRecordList, setMedicalRecordList] = useState();
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      if (user?.Email) {
        getUserMedicalRecord();
      }
    }, [user.Email])
  );

  const getUserMedicalRecord = () => {
    GlobalApi.getUserMedicalRecord(user.Email).then((resp) => {
      setMedicalRecordList(resp.data.data);
    });
  };
  if (!medicalRecordList) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tidak ada appointment.</Text>
      </View>
    );
  }
  // const getUserMedicalRecord = () => {
  //   GlobalApi.getUserMedicalRecord(user.primaryEmailAddress.emailAddress).then(
  //     (resp) => {
  //       setMedicalRecordList(resp.data.data);
  //     }
  //   );
  // };

  const navigateToDetail = (medicalRecord) => {
    navigation.navigate("mr-detail", { medicalRecord });
  };
  return (
    <View style={{ padding: 20 }}>
      <PageHeader headerTitle={"Medical Record"} backButton={false} />
      <FlatList
        data={medicalRecordList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetail(item)}>
            <MedicalRecordCard medical_records={item} />
          </TouchableOpacity>
        )}
      />
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
