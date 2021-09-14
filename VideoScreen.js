import * as React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import CameraScreen from "./CameraScreen";

const VideoScreen = (props) => {
  const onBuffer = (data) => {
    console.log("on buffering...", data);
  };
  const videoError = (data) => {
    console.log("error raised...", data);
  };
  return (
    <View style={styles.container}>
      <Video
        // ref={video}
        style={styles.video}
        source={require("./assets/video.mp4")}
        resizeMode="cover"
        onBuffer={onBuffer}
        onError={videoError}
        repeat={true}
        shouldPlay={true}
        // useNativeControls={disable}

        isLooping
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 470,
        }}
      >
        <View>
          <TouchableOpacity
          // onPress={() => props.navigation.navigate("HomeScreen")}
          >
            <Image
              style={{ height: 80, width: 80, borderRadius: 50 }}
              source={require("./assets/callend.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            // marginTop: 450,
            // alignItems: "center",
            // marginLeft: 250,
            // position: "absolute",
            width: 50,
            height: 200,
            marginLeft: 40,
          }}
        >
          <CameraScreen />
        </View>
      </View>
    </View>
  );
};
export default VideoScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: "100%",
    alignSelf: "center",
    // padding: 5,
    width: "100%",
  },
});
