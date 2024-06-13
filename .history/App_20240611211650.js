import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StackNavigation from "./App/Navigations/StackNavigation";
// import Login from "./app/Screens/Login";
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    text_regular: require("./assets/fonts/Poppins-Regular.ttf"),
    text_bold: require("./assets/fonts/Poppins-Bold.ttf"),
    text_semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    text_light: require("./assets/fonts/Poppins-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      {/* content */}
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        {/* <NavigationContainer>
          <Login />
        </NavigationContainer> */}
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

// <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
//   <SafeAreaView style={styles.container}>
//     <StatusBar hidden />
//     <SignedIn>
//       <NavigationContainer>
//         <TabNavigation />
//       </NavigationContainer>
//       {/* <Home /> */}
//     </SignedIn>
//     <SignedOut>
//       <Login />
//     </SignedOut>
//   </SafeAreaView>
// </ClerkProvider>

// const CLERK_PUBLISHABLE_KEY =
//   "pk_test_YWxpdmUtbWF5Zmx5LTM5LmNsZXJrLmFjY291bnRzLmRldiQ";
