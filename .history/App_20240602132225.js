import { ClerkProvider } from "@clerk/clerk-expo";
import { StyleSheet, View } from "react-native";
import Login from "./App/Screens/Login";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={"pk_test_YWxpdmUtbWF5Zmx5LTM5LmNsZXJrLmFjY291bnRzLmRldiQ"}
    >
      <View style={styles.container}>
        <Login />
        {/* <StatusBar style="auto" /> */}
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
