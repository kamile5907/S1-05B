import { Button, } from 'react-native';
import { styles } from '../style/StyleSheet';

export default function LoginButton() {

  pressButton = () => {
    alert("Você pressionou o botão!")
  }
  
    return (
<Button
          style={styles.LoginButton}
          onPress={pressButton}
          title='Entrar'
          color='black'
          // botão para efetuar o login
        />
    )}