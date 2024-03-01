import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {

  changeText = () => {
    alert("HELLO :D");
  }

  pressButton = () => {
    alert("Você pressionou o botão!")
  }

  const imagem = { uri: 'https://urldaimagem.com' }

  return (
    <View style={styles.container}>
      <ImageBackground source={imagem} resizeMode='cover'>

        <Button
          style={{ backgroundColor: 'red' }}
          onPress={pressButton}
          title='Click me!'
          color='white'
        />

        <Image
          source={imagem}
          resizeMode='cover'
        />

        <Image
          source={require('./assets/favicon.png')}
          style={[styles.img, { resizeMode: 'cover' }]}
        />





        <Text style={[styles.container, { color: 'red' }]}>React
          <Text style={{ color: 'black', borderWidth: 1, }}>Native</Text>
        </Text>

        <TextInput style={styles.inputName}
          placeholder='TESTING'
          inputMode='numeric'
          secureTextEntry={true}
          placeholderTextColor='red'
          onChangeText={changeText}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputName: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    fontSize: 20,
  },
});