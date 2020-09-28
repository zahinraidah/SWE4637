import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
const HomeScreen = (props) => {
  return (
    <View>
      <View style={styles.buttonStyle}>
        <Button
          title="Go To List"
          onPress={function () {
            props.navigation.navigate("ListScreen");
          }}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title="Go To ImageScreen"
          onPress={function () {
            props.navigation.navigate("ImageScreen");
          }}
        />
      </View>
      <Text>This is Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    margin: 5,
    borderColor: "red",
    borderWidth: 3,
  },
});
export default HomeScreen;