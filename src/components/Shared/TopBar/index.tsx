import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Space from "../Space";


export default function TopBar() {
  return (
    <View style={styles.topBar}>
      <View>
        <Text style={styles.title}>A Rádio que te faz feliz</Text>
      </View>
      <Space height={5} />
      <Image style={styles.tinyLogo}
        source={require("../../../../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: "row",
    height: 80,
    width: "100%",
    padding: 20,
    backgroundColor: "#161616",
  },
  title: {
    color: "#ccc",
    fontSize: 14,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 110,
    height: 42,
  },
});
