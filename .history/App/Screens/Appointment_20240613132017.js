import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "../../assets/Shared/Colors";
import AppointmentCardItem from "../Components/Appointment/AppointmentCardItem";
import PageHeader from "../Components/Shared/PageHeader";
import { UserContext } from "../Context/UserContext";
import GlobalApi from "../Services/GlobalApi";

export default function Appointment() {
  // const { isLoaded, isSignedIn, user } = useUser();
  const { user } = useContext(UserContext);

  const [appointmentList, setAppointmentList] = useState();
  useFocusEffect(
    useCallback(() => {
      if (user?.Email) {
        getUserAppointments();
      }
    }, [user.Email])
  );
  // if (appointmentList.length === 0) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>Tidak ada appointment.</Text>
  //     </View>
  //   );
  // }
  if (!appointmentList) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tidak ada appointment.</Text>
      </View>
    );
  }
  //     if (user?.Email) {
  //     getUserDataa();
  //   }
  // }, [user?.Email])
  const getUserAppointments = () => {
    GlobalApi.getUserAppointments(user.Email).then((resp) => {
      setAppointmentList(resp.data.data);
    });
  };
  // const getUserAppointments = () => {
  //   GlobalApi.getUserAppointments(user.primaryEmailAddress.emailAddress).then(
  //     (resp) => {
  //       setAppointmentList(resp.data.data);
  //     }
  //   );
  // };
  return (
    <View style={{ padding: 20 }}>
      <PageHeader headerTitle={"My Appointment"} backButton={false} />
      <FlatList
        data={appointmentList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <AppointmentCardItem appointment={item} />}
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
