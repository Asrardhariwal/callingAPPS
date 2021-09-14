import React from "react";
import { StyleSheet, View } from "react-native";
import VideoScreen from "./VideoScreen";

const VideoConnector = () => {
  return (
    <View style={styles.container}>
      <VideoScreen />
    </View>
  );
};
export default VideoConnector;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    // backgroundColor: "yellow",
    height: "100%",
    width: "100%",
  },
});
