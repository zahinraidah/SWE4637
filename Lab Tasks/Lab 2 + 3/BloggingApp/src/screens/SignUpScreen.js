import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { FontAwesome, Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import { storeDataJSON } from "../functions/AsyncStorageFunctions";
import { getDataJSON } from "../functions/AsyncStorageFunctions";

const SignUpScreen = (props) => {
  const [username, setUsername] = useState("");
  const [Name, setName] = useState("");
  const [SID, setSID] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const image = {uri:"https://cdn.hipwallpaper.com/i/97/16/ZcjRI9.jpg"};

  return (
    <View style={styles.viewStyle}>
      <ImageBackground source={image} style={styles.image}>
        <Card>
          <Card.Title>Welcome to AuthApp!</Card.Title>
          <Card.Divider />
          <Input
            leftIcon={<AntDesign name="user" size={24} color="black" />}
            placeholder="Username"
            onChangeText={function (currentInput) {
              setUsername(currentInput);
            }}
          />
          <Input
            leftIcon={<Ionicons name="ios-person" size={24} color="black" />}
            placeholder="Name"
            onChangeText={function (currentInput) {
              setName(currentInput);
            }}
          />
          <Input
            leftIcon={<Ionicons name="ios-school" size={24} color="black" />}
            placeholder="Student ID"
            onChangeText={function (currentInput) {
              setSID(currentInput);
            }}
          />
          <Input
            leftIcon={<FontAwesome name="envelope" size={24} color="black" />}
            placeholder="E-mail Address"
            onChangeText={function (currentInput) {
              setEmail(currentInput);
            }}
          />

          <Input
            placeholder="Password"
            leftIcon={<Feather name="key" size={24} color="black" />}
            secureTextEntry={true}
            onChangeText={function (currentInput) {
              setPassword(currentInput);
            }}
          />

          <Button
            icon={<AntDesign name="user" size={24} color="white" />}
            title="  Sign Up!"
            type="solid"
            onPress={async function () {
              let currentUser = {
                username: username,
                name: Name,
                password: Password,
                email: Email,
                SID: SID,
              };
              storeDataJSON(username, currentUser);
              let UserData = await getDataJSON(username);
              console.log(UserData);
              props.navigation.navigate("SignIn");
            }}
          />
          <Button
            type="clear"
            icon={<AntDesign name="login" size={24} color="dodgerblue" />}
            title="  Already have an account?"
            onPress={function () {
              props.navigation.navigate("SignIn");
            }}
          />
        </Card>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#4bacb8",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
export default SignUpScreen;
