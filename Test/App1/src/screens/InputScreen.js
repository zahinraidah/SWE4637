import React, { useState } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";

import { Picker } from "@react-native-community/picker";

const InputScreen = () => {
  let [username, setusername] = useState("");
  let [isEnabled, setisEnabled] = useState(false);
  let [lang, setlang] = useState("english");
  return (
    <View>
      <Text style={styles.textStyle}>{username}</Text>
      <TextInput
        placeholder="username"
        style={styles.inputStyle}
        onChangeText={function (currentInput) {
          setusername(currentInput);
        }}
        onSubmitEditing={function () {
          console.log(username);
        }}
        secureTextEntry={true}
      />
      <Switch
        value={isEnabled}
        onValueChange={function () {
          if (isEnabled === true) {
            setisEnabled(false);
          } else {
            setisEnabled(true);
          }
        }}
      />

      <Picker
        mode="dropdown"
        selectedValue={lang}
        onValueChange={function (itemValue, itemIndex) {
          setlang(itemValue);
        }}
      >
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Spanish" value="spanish" />
        <Picker.Item label="Hieroglyph" value="hieroglyph" />
        <Picker.Item label="Latin" value="Latin" />
      </Picker>

      <Text style={styles.textStyle}>{lang}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
    margin: 20,
    padding: 10,
  },

  inputStyle: {
    borderColor: "green",
    borderWidth: 2,
    margin: 10,
    padding: 5,
  },
});

export default InputScreen;
