import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";

const SignInScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title>Welcome to AuthApp!</Card.Title>
        <Card.Divider />
        <Input
          leftIcon={<FontAwesome name="envelope" size={24} color="black" />}
          placeholder="E-mail Address"
        />

        <Input
          placeholder="Password"
          leftIcon={<Feather name="key" size={24} color="black" />}
          secureTextEntry={true}
        />

        <Button
          icon={<AntDesign name="login" size={24} color="white" />}
          title="  Sign In!"
          type="solid"
        />
        <Button
          type="clear"
          icon={<AntDesign name="user" size={24} color="dodgerblue" />}
          title="  Don't have an account?"
          onPress={function () {
            props.navigation.navigate("SignUp");
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#4bacb8",
  },
});
export default SignInScreen;
