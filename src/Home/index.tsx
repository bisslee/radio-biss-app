import { StyleSheet, Text, View } from "react-native";
import TopBar from "../components/Shared/TopBar";
import Social from "../components/Shared/Social";
import FooterBar from "../components/Shared/FooterBar";
import Space from "../components/Shared/Space";
import Player from "../components/Player";
import MainDisplay from "../components/Home";

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <TopBar />
      <Space height={10} />
      <View style={styles.container}>
        <Player />
        <Space height={10} />
        <View style={styles.mainView}>
          <MainDisplay />
        </View>
        <Space height={10} />
        <Social />
      </View>
      <FooterBar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    padding: 10,
  },
  mainView: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text: {
    color: "#151d3d",
    fontSize: 16,
    textAlign: "center",
  },
  space: {
    height: 50,
  },
  littleSpace: {
    height: 15,
  },
  box: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '45%',
  },
  sentence: {
    color: "#151d3d",
    fontSize: 30,
  }
});
