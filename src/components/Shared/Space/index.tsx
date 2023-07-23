import { View, StyleSheet } from "react-native";

interface HeightProps {
  height?: number;
  widht?: number;
}

export default function Space(props: HeightProps ) {

  const styles = StyleSheet.create({
    space: {
      height: props.height,
      width: props.widht,
    },
  });

  return (
      <View style={styles.space}></View>
  );
}
