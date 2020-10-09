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
        <View style={styles.buttonStyle}>
          <Button
          title="Go To StorageScreen"
          onPress={function () {
            props.navigation.navigate("StorageScreen");
          }}
        />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Go To StateScreen"
            onPress={function () {
              props.navigation.navigate("StateScreen");
            }}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Go To BoxScreen"
            onPress={function () {
              props.navigation.navigate("BoxScreen");
            }}
          />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    margin: 5,
    borderColor: "blue",
    borderWidth: 3,
  },
});
export default HomeScreen;