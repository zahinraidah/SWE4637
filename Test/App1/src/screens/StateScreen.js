import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const StateScreen = () => {
  let [Counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={styles.textStyle}>{Counter}</Text>
      <Button
        title="Increase"
        onPress={function () {
          setCounter(Counter + 1);
        }}
        color="green"
      />
      <Button
        title="Decrease"
        onPress={function () {
          setCounter(Counter - 1);
        }}
        color="red"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: "red",
  },
});

export default StateScreen;

//Counter
//Number - Array of Strings, Array of Objects, Object, String
//0
