import { ImageBackground } from 'react-native';
import { styles } from '../style/StyleSheet';

const LoginBackground = ({ children }) => {
    const imagem2 = { uri: 'https://st.depositphotos.com/1813957/4016/i/450/depositphotos_40168951-stock-illustration-abstract-purple-colorful-background.jpg'}
    
    return (
        <ImageBackground 
        source={imagem2} style={styles.image}>
        { children }
        </ImageBackground>

)}
export default LoginBackground