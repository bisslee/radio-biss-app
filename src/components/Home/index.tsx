import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity, FlatList } from "react-native";
import Space from "../Shared/Space";
import HomeList from "./HomeList";

interface HomeListProps {
  listTitle: string;
  listSubTitle: string;
  data: any;
}

export default function MainDisplay() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");

  const dataTop = [
    { id: 1, name: "Thriller" },
    { id: 2, name: "Hit me baby, on more time" },
    { id: 3, name: "Like a Virgin" },
    { id: 4, name: "Come on Eillen" },
    { id: 5, name: "I will survive" },
  ]

  const dataNews = [
    { id: 1, name: "It's only Rock'n'Roll : 16:00" },
    { id: 2, name: "Balaio da Biss: 18:00" },
    { id: 3, name: "Fritas Para Acompanhar  : 19:00" },
    { id: 4, name: "Black Biss: 20:00" },
    { id: 5, name: "Love's in the air: 23:00" },
  ]

// Preencher com API
  const dataList = [
    {
      id: 1,
      listTitle: "Top 5",
      listSubTitle: "Hoje na Rádio",
      data: dataTop
    },
    {
      id: 2,
      listTitle: "O que vem por ai",
      listSubTitle: "Programas de hoje",
      data: dataNews
    },
  ]

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSend = () => {
    console.log('send',name, songTitle, artist);
    //
    closeModal();
  };

  return (
    <View style={styles.container}>
       {/* // Listas */}
      <View style={styles.TopView}>
        <HomeList
          listTitle={dataList[0].listTitle}
          listSubTitle={dataList[0].listSubTitle}
          data={dataList[0].data}
        />
        <Space height={8} />
        <HomeList
          listTitle={dataList[1].listTitle}
          listSubTitle={dataList[1].listSubTitle}
          data={dataList[1].data}
        />
      </View>
      <Space height={10} />
       {/* // Notões */}
      <View style={styles.BottomView}>
        <TouchableOpacity style={styles.button} onPress={openModal}>
          <Text style={styles.sentence}>Peça sua música</Text>
        </TouchableOpacity>
        <Space height={8} />
        <TouchableOpacity style={styles.button} onPress={openModal}>
          <Text style={styles.sentence}>Anuncie Conosco</Text>
        </TouchableOpacity>
      </View>
      {/* // Modal */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Pedido de Música</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Título da Música"
              value={songTitle}
              onChangeText={setSongTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Artista"
              value={artist}
              onChangeText={setArtist}
            />
            <View style={styles.ModalButtons } >
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
            <Space height={5} />
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    backgroundColor: "#28637e",
    opacity: 0.8,
    height: "100%",
    width: "100%",
    padding: 10,
    borderRadius: 20,
  },
  TopView: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
  },
  TopViewItem: {
    width: "48%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a2430",
    borderRadius: 20,
    padding: 8,
  },
  TopViewItemTitle: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  TopViewItemSubTitle: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  BottomView: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    width: "100%",
  },
  button:{
    width: "48%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a2430",
    borderRadius: 20,
  },
  listItems: {
    color: "#fff",
    fontSize: 14,
    textAlign: "left",

  },
  sentence: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    backgroundColor: "#28637e",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 250,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  ModalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  sendButton: {
    backgroundColor: "#0a2430",
    borderRadius: 5,
    padding: 10,
    width: 80,
    alignItems: "center",
    marginTop: 10,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
    borderRadius: 5,
    padding: 10,
    width: 80,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
