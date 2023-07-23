import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Space from "../../Shared/Space";
import SongPosition from "../SongPosition";


export default function PreviousNextSong() {
  const songPositionList = [
    {id: 1, songArtist: "Cartola", songPosition: "Anterior", songTitle: "Carinhoso"},
    {id: 2, songArtist: "Whitesnake", songPosition: "Próxima", songTitle: "Here I Go Again"},
  ]

  return (
    <View style={styles.topBar}>
      <SongPosition
        songArtist={songPositionList[0].songArtist}
        songPosition={songPositionList[0].songPosition}
        songTitle={songPositionList[0].songTitle}
      />
      <Space height={8} />
      <SongPosition
        songArtist={songPositionList[1].songArtist}
        songPosition={songPositionList[1].songPosition}
        songTitle={songPositionList[1].songTitle}
      />
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
});
