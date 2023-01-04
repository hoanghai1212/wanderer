import { View, StyleSheet, ViewProps } from "react-native";
import MapView from "react-native-maps";

export const TimelineMap = ({style}: ViewProps) => {
    return (
      <View style={style}>
        <MapView style={styles.map}  />
      </View>
    )
}

const styles = StyleSheet.create({
    map: {
      flex: 1,
    },
});