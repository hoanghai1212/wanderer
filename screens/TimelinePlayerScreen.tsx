import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import MapView from "react-native-maps";
import { TimelinePlayerControl, TimelineMap } from "../components/TimelinePlayer";

export const TimelinePlayerScreen = () => {
  return (
    <View style={styles.container}>
      <TimelineMap style={styles.mapWrapper} />
      <TimelinePlayerControl style={styles.mapControl}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapWrapper: {
    height: "50%",
    width: "100%",
  },
  mapControl: {
    marginTop: 8,
  },
});
