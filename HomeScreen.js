import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.homeView}>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("VideoConnector")}
        >
          <Image
            style={{ height: 200, width: 200 }}
            source={require("./assets/callingimg.jpg")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeView: {
    backgroundColor: "white",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
