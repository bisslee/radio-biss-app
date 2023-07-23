import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Space from "../../Shared/Space";

export default function ShowInfo() {
  const showInfo = {
    title: "Balaio da Biss",
    djName: "Biss Lee",
    schedule: "Diariamente às 20:00",
    logo: require("../../../../assets/shows/b-balaio_da_biss.png"),
  };

  return (
    <View style={styles.info}>
      <View style={styles.ShowInfo}>
        <View style={styles.firstLine}>
        <Text style={styles.ShowTitle}>{showInfo.title}</Text>
        <Text style={styles.ShowDjName}>({showInfo.djName})</Text>
        </View>
        <Text style={styles.ShowSchedule}>{showInfo.schedule}</Text>
      </View>
      <Space widht={15} />
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={showInfo.logo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#0a2430",
    opacity: 0.9,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
  },
  logo: {
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: "center",
    width: 60,
    height: 60,
  },
  ShowInfo: {
    justifyContent: "center",
    height: 60,
    width: "72%",
  },
  ShowDjName: {
    color: "#fff",
    fontSize: 15,
    paddingLeft: 10,
  },
  ShowTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  ShowSchedule: {
    color: "#fff",
    fontSize: 12,
  },
  firstLine: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
