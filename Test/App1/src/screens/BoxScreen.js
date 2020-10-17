import React, { useState } from "react";
import { Button, View } from "react-native";

const CreateRGB = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let str = "rgb(" + red + "," + green + "," + blue + ")";
  return str;
};

const BoxScreen = () => {
  let [Color, setColor] = useState("rgb(0,255,0)");
  return (
    <View>
      <Button
        title="Change Color"
        onPress={function () {
          setColor(CreateRGB());
        }}
      />
      <View style={{ height: 100, width: 100, backgroundColor: Color }} />
    </View>
  );
};

export default BoxScreen;
