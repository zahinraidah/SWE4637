import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage, TouchableOpacity } from "react-native";
import { Text, Card, Button, Avatar, Header, Image } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import { removeData } from "../functions/AsyncStorageFunctions";
import { getDataJSON } from "../functions/AsyncStorageFunctions";

const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Header
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: function () {
                props.navigation.toggleDrawer();
              },
            }}
            centerComponent={{ text: "BloggerLife", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          />
          <Card>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require('../../assets/profile.jpg')}
                style={styles.imageStyle}
              />
              <Text style={{ fontSize: 32 }}>
                {auth.CurrentUser.name}
              </Text>
            </View>
          </Card>
          <TouchableOpacity
            style={{ height: 8, width: 150, alignSelf: "center", marginTop: 10, marginBottom: 28 }}
          >
            <Button type="solid" title="Delete Profile"
              onPress={ function () {
                let data = getDataJSON(auth.CurrentUser.email)
                removeData(data)
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              }} />
          </TouchableOpacity>
          <Card>
            <View>
              <Text style={{ alignSelf: "center", fontSize: 18 }}>
                Born on: July 29, 2000 {"\n"}
                  Address: Chandpur, Bangladesh {"\n"}
                  Studying at IUT {"\n"}
                  Likes Cats {"\n"}
                  Hates people
              </Text>
            </View>
          </Card>
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
  viewStyle: {
    flex: 1,
  },
  imageStyle: {
    height: 260,
    width: 260,
    alignSelf: 'center',
  },
});

export default ProfileScreen;
