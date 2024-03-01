import { View, Text} from "react-native";
import LoginBackground from "../components/LoginBackground";
import LoginButton from "../components/LoginButton";
import LoginImage from "../components/LoginImage";
import LoginInput from "../components/LoginInput";
import LoginText from "../components/LoginText";


export default function Login() {
  return (
    <View>
      <LoginBackground>
      <LoginImage />
      <LoginText />
      <LoginInput />
      <LoginButton />
      </LoginBackground>
    </View>
  );
}
