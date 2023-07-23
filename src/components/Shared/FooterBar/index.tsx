import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>©2023 - Rádio Biss | Todos os direitos reservados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 5
  },
  text:{
    color:'#09202b',
    fontSize: 14
  }
});
