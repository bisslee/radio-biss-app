import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from "react-native"; // Importe o ImageBackground
import Home from './src/Home';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/Fundo04.png')}
      style={styles.container}>
      <Home />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Certifique-se de usar flex: 1 para que o ImageBackground ocupe toda a tela
    alignItems: "center",
    justifyContent: "center",
  },
});
