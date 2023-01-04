import { FontAwesome5 } from "@expo/vector-icons";
import { View, ViewProps } from "../Themed";
import { StyleSheet, TouchableOpacity } from "react-native";

export const TimelinePlayerControl = ({ style }: ViewProps) => {
  return (
    <View style={style}>
      <View style={styles.container}>
        <View style={styles.controlContainer}>
          <TouchableOpacity>
            <FontAwesome5 name="step-backward" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome5 name="play-circle" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome5 name="step-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}></View>
          <View style={styles.circle}></View>
          <View style={[styles.checkpoint, { left: 40 }]}></View>
          <View style={[styles.checkpoint, { left: 80 }]}></View>
          <View style={[styles.checkpoint, { left: 120 }]}></View>
          <View style={[styles.checkpoint, { left: 200 }]}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8,
  },
  controlContainer: {
    flexDirection: "row",
  },
  progressContainer: {
    position: "relative",
    flexGrow: 1,
    marginLeft: 16,
  },
  circle: {
    position: "absolute",
    top: -6,
    left: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  checkpoint: {
    position: "absolute",
    top: -4,
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 2,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#ccd4d3",
    borderColor: "#ccd4d3",
    borderRadius: 5,
  },
});
