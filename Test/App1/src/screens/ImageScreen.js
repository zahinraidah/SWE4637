import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <ImageDetail title="Beach" />
      <ImageDetail title="Forest" />
      <ImageDetail title="Mountain" />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    borderColor: "dodgerblue",
    borderWidth: 3,
    justifyContent: "flex-end",
    alignSelf: "center",
    flex: 1,
  },
});

export default ImageScreen;
