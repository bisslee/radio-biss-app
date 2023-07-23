import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import Space from "../../Shared/Space";


export default function RadioControls() {

  const iceUrl = 'https://cc3.streammaximum.com:20044/autodj';

  const handlePlay = () => {
    console.log('play', iceUrl);
  };

  const handleStop = () => {
    console.log('stop', iceUrl);
  };

  const handlePlus = () => {
    console.log('plus', iceUrl);
  };

  const handleMinus = () => {
    console.log('minus', iceUrl);
  };


  return (
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => handlePlay()}>
          <Text  style={styles.textButton} > {" > "} </Text>
        </TouchableOpacity>
        <Space widht={6} />
        <TouchableOpacity style={styles.button} onPress={() => handleStop()}>
          <Text  style={styles.textButton} > {" || "} </Text>
        </TouchableOpacity>
        <Space widht={15} />
        <TouchableOpacity style={styles.button} onPress={() => handlePlus()}>
          <Text  style={styles.textButton} > {" + "} </Text>
        </TouchableOpacity>
        <Space widht={1} />
        <View style={styles.slider}></View>
        <Space widht={1} />
        <TouchableOpacity style={styles.button} onPress={() => handleMinus()}>
          <Text  style={styles.textButton} > {" - "} </Text>
        </TouchableOpacity>
        <Space widht={15} />
        <TextInput style={styles.textInput} placeholder="100">
        </TextInput>
      </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    backgroundColor: "#fff",
    height: 5,
    width: 115,
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
  button: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#28637e",
    height: 30,
    width: 30,
    borderRadius: 10,
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#fff",
    color: "#000",
    textAlign: "center",
    textAlignVertical: "bottom",
    fontSize: 14,
    fontWeight: "bold",
    height: 35,
    width: 60,
    borderRadius: 10,
    borderColor: '#28637e',
    borderWidth: 3,
  },
});
