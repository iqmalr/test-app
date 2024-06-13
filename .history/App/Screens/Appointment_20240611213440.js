import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import AppointmentCardItem from "../Components/Appointment/AppointmentCardItem";
import PageHeader from "../Components/Shared/PageHeader";
import GlobalApi from "../Services/GlobalApi";

export default function Appointment() {
  // const { isLoaded, isSignedIn, user } = useUser();
  const { user } = useContext(UserContext);

  const [appointmentList, setAppointmentList] = useState();
  useFocusEffect(
    useCallback(() => {
      if (email) {
        getUserAppointments();
      }
    }, [user.fullName])
  );
  const getUserAppointments = () => {
    GlobalApi.getUserAppointments(user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        setAppointmentList(resp.data.data);
      }
    );
  };
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
