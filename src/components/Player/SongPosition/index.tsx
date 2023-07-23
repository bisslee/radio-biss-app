import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Space from "../../Shared/Space";

interface SongPositionProps {
  songPosition: string;
  songTitle: string;
  songArtist: string;
}

export default function SongPosition(props: SongPositionProps) {
  return (

    <View style={styles.info}>
      <View style={styles.songInfo}>
        <Text style={styles.songPosition}>{props.songPosition}</Text>
        <Text style={styles.songTitle}>{props.songTitle}</Text>
        <Text style={styles.songArtist}>{props.songArtist}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: "row",
    height: 70,
    width: "100%",
    borderRadius: 20,
  },
  info: {
    borderRadius: 18,
    backgroundColor: "#0a2430",
    overflow: "hidden",
    width: "47%",
    flexDirection: "row",

    height: 70,
  },
  songInfo: {
    paddingHorizontal: 20,
    justifyContent: "center",
    height: 70,
    width: "100%",
  },
  songArtist: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
  songTitle: {
    color: "#ffd",
    fontSize: 14,
    fontWeight: "bold",
  },
  songPosition: {
    color: "#3bc8eb",
    fontSize: 14,
    fontWeight: "bold",
  },
});
