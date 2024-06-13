import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from "react";
import { FlatList, View } from "react-native";
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
