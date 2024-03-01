import { TextInput, View } from "react-native";
import { styles } from "../style/StyleSheet";

export default function LoginInput() {
  return (
    <View>
      <TextInput
        style={styles.inputName}
        placeholder="Insira seu usúario"
        placeholderTextColor="white"
      />

      <TextInput
        style={styles.inputName}
        placeholder="Digite sua senha"
        inputMode="numeric"
        secureTextEntry={true}
        placeholderTextColor="white"
      />
    </View>
  );
}
