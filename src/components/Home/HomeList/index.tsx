import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity, FlatList } from "react-native";
import Space from "../../../components/Shared/Space";

interface HomeListProps {
  listTitle: string;
  listSubTitle: string;
  data: any;
}

export default function HomeList(props: HomeListProps) {
  return (
    <View style={styles.TopViewItem}>
      <Text style={styles.TopViewItemTitle}>{props.listTitle}</Text>
      <Text style={styles.TopViewItemSubTitle}>{props.listSubTitle}</Text>
      <Space height={10} />
      <FlatList
        data={props.data}
        renderItem={({ item }) =>
          <Text style={styles.listItems}>* {item.name}</Text>
        }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  listItems: {
    color: "#fff",
    fontSize: 14,
    textAlign: "left",

  },
});
