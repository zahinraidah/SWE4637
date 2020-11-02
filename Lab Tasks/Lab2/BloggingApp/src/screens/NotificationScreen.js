import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, FlatList, } from "react-native";
import { Card } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import HeaderTop from "../components/HeaderTop";
import NotificationCard from "../components/NotificationCard";
import { getAllNotifications } from "../functions/NotificationFunctions";
import { getAllComments } from "../functions/PostFunctions";

const NotificationScreen = (props) => {
  const [Notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(false);

  const image = { uri: "https://i.pinimg.com/originals/59/11/cd/5911cda1f1ae980b26ca367af3197dfd.jpg" };

  const loadNotifications = async () => {
    setLoading(true);
    let response = await getAllNotifications();
    if (response != null) {
      setNotification(response);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <ImageBackground source={image} style={styles.image}>
          <HeaderTop
            DrawerFunction={() => {
              props.navigation.toggleDrawer();
            }}
          />
          <FlatList
            data={Notification}
            onRefresh={loadNotifications}
            refreshing={loading}
            renderItem={function ({ item }) {
              let data = JSON.parse(item)
              if (data.reciever == auth.CurrentUser.name) {
                return (
                  <View>
                    <Card>
                      <NotificationCard
                        Text = {data.sender}
                        Type = {data.type}
                      />
                    </Card>
                  </View>
                );
              }
            }}
            keyExtractor={(item, index) => index.toString()}
          />
          </ImageBackground>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default NotificationScreen;
