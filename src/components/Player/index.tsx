import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Space from "../Shared/Space";
import RadioControls from "./RadioControls";
import NowPlaying from "./NowPlaying";
import PreviousNextSong from "./PreviousNextSong";
import ShowInfo from "./ShowInfo";


export default function Player() {
  return (
    <View>
      <ShowInfo />
      <Space height={10} />
      <View style={styles.topBar}>
        <NowPlaying />
        <Space height={8} />
        <RadioControls />
        <Space height={10} />
        <PreviousNextSong />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    alignItems: 'center',
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#28637e",
    height: 230,
    width: "100%",
    borderRadius: 20,
  },
  slider: {
    backgroundColor: "#fff",
    height: 5,
    width: 100,
  },
  info: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#0a2430",
  },
  buttons: {
    alignItems: 'center',
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#0a2430",
    height: 50,
    width: "100%",
    borderRadius: 16,
  },
  image: {
    width: 70,
    height: 70,
  },
  logo: {
    borderRadius: 20,
    alignItems: 'center',
    width: 70,
    height: 70,
  },
  songInfo: {
    padding: 10,
    justifyContent: "center",
    height: 70,
    width: "72%",
  },
  songArtist: {
    color: "#fff",
    fontSize: 15,
  },
  songTitle: {
    color: "#fff",
    fontSize: 18,
  },
  songYear: {
    color: "#fff",
    fontSize: 13,
  },
  textInput: {
    backgroundColor: "#fff",
    color: "#000",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    fontWeight: "bold",
    height: 40,
    width: 75,
    borderRadius: 10,
  },
});
