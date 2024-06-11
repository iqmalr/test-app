import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={"pk_test_YWxpdmUtbWF5Zmx5LTM5LmNsZXJrLmFjY291bnRzLmRldiQ"}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <SignedIn>
          <Text>You Are SignedIn</Text>
          {/* <NavigationContainer>
            <TabNavigation />
          </NavigationContainer> */}
          {/* <Home /> */}
        </SignedIn>
        <SignedOut>
          {/* <Login /> */}
          <Text>You Are SignedOut</Text>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
