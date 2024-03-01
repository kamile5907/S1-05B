import Login from "./src/Pages/Login.js";
import { styles } from "./src/style/StyleSheet.js";
import { View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}
  
export default App
