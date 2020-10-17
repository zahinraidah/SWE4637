import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import { Button } from "react-native-elements";

const HomeScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View>
          <Text style={{ fontSize: 30 }}>Welcome {auth.CurrentUser.name}!</Text>
          <Button
            type="outline"
            title="Log Out!"
            onPress={function () {
              auth.setIsLoggedIn(false);
              auth.setCurrentUser({});
            }}
          />
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
});
export default HomeScreen;
