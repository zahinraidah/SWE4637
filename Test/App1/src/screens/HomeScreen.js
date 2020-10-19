import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  //console.log(props);
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <Button
        title="List Screen"
        onPress={function () {
          props.navigation.navigate("List");
          console.log("Button Pressed");
        }}
      />

      <Button
        title="Image Screen"
        onPress={function () {
          props.navigation.navigate("Image");
        }}
      />

      <Button
        title="Storage Screen"
        onPress={function () {
          props.navigation.navigate("Storage");
        }}
      />
      <Button
        title="State Screen"
        onPress={function () {
          props.navigation.navigate("State");
        }}
      />
      <Button
        title="Box Screen"
        onPress={function () {
          props.navigation.navigate("Box");
        }}
      />
      <Button
        title="Input Screen"
        onPress={function () {
          props.navigation.navigate("Input");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
});

export default HomeScreen;
