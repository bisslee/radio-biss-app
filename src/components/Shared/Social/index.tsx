import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Linking } from "react-native";

export default function Social() {
  const socialData = [
    {id: 1, name: "www", url: "https://radiobiss.com.br/", image: require("../../../../assets/globe-solid.png")},
    {id: 2, name: "whatsapp", url: "https://api.whatsapp.com/send?phone=5511952739399", image: require("../../../../assets/square-whatsapp.png")},
    {id: 3, name: "youtube", url: "https://www.youtube.com/radiobiss", image: require("../../../../assets/youtube.png")},
    {id: 4, name: "instagram", url: "https://www.instagram.com/radiobiss/", image: require("../../../../assets/square-instagram.png")},
    {id: 5, name: "twitter", url: "https://twitter.com/radio_biss", image: require("../../../../assets/square-twitter.png")},
    {id: 6, name: "facebook", url: "https://facebook.com/radiobisss", image: require("../../../../assets/square-facebook.png")},
  ];

  const handlePressSocial = (socialUrl:string) => {
    // Redirecionar para a URL do YouTube da Rádio Biss
    Linking.openURL(socialUrl);
  };

  return (
    <View style={styles.container}>
      {socialData.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handlePressSocial(item.url)}>
          <Image
            style={styles.tinyLogo}
            source={item.image}
            alt="{item.name}"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#28637e",
    flexDirection: "row",
    height: 32,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  tinyLogo: {
    height: 18,
    width: 18,
  },
});
