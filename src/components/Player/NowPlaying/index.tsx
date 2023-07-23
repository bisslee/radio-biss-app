import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Space from "../../Shared/Space";

export default function NowPlaying() {
  const nowPlaying = {
    songTitle: "Run to the hill",
    songArtist: "Iron Maiden",
    songYear: "1985",
    logo: require("../../../../assets/avatar-1.jpg"),
  };

  return (
    <View style={styles.info}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={nowPlaying.logo}
        />
      </View>
      <Space widht={15} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{nowPlaying.songTitle}</Text>
        <Text style={styles.songArtist}>{nowPlaying.songArtist}</Text>
        <Text style={styles.songYear}>{nowPlaying.songYear}</Text>
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
    opacity: 0.9,
    backgroundColor: "#0a2430",
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
});
