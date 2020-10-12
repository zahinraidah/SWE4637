import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text>Welcome to HomeScreen!</Text>
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
