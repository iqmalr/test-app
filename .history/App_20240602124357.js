import { StyleSheet, View } from 'react-native';
import Login from './App/Screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
