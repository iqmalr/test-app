import { useNavigation } from "@react-navigation/native";

export default function LogoutButton() {
  // const { signOut } = useClerk();
  const navigation = useNavigation();
  const handleLogout = async () => {
    console.log("Logout");
    // try {
    //   await signOut();
    //   //   navigation.navigate("Login");
    // } catch (error) {
    //   console.error("Failed to log out", error);
    // }
  };
  return;
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
