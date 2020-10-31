import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Text, Card, Button, Image } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import { AntDesign } from '@expo/vector-icons';
import { clearAllData, getSpecificData, storeDataJSON } from "../functions/AsyncStorageFunctions";
import { getDataJSON } from "../functions/AsyncStorageFunctions";
import { getAllData } from "../functions/AsyncStorageFunctions";
import HeaderTop from "../components/HeaderTop";

const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <HeaderTop
            DrawerFunction={() => {
              props.navigation.toggleDrawer();
            }}
          />
          <Card>
            <View style={{ alignItems: "center" }}>
              <Image source={require("../../assets/profile.jpg")} style={styles.imageStyle} />
              <Text style={{ fontSize: 32 }}>
                {auth.CurrentUser.name}
              </Text>
            </View>
          </Card>
          <TouchableOpacity
            style={{ height: 8, width: 150, alignSelf: "center", margin: 10, marginBottom: 28 }}
          >
            <Button
              type="solid"
              title=" Delete Profile"
              icon={<AntDesign name="deleteuser" size={24} color="white" />}
              onPress={async () => {
                console.log("pressed");
                
                let data = await getSpecificData("post");
                console.log(data)
                data.forEach(async (item) =>{
                  let dataset = await getDataJSON(JSON.stringify(item));
                  console.log(dataset);
                })
                //clearAllData();

                {/*removeData(auth.CurrentUser.id);
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});*/}
              }}
            />
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
    height: 200,
    width: 200,
    margin: 5,
  },
});

export default ProfileScreen;