import React, { useState, useEffect } from "react";
import { View, StyleSheet, AsyncStorage, FlatList, } from "react-native";
import { Card } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import HeaderTop from "../components/HeaderTop";
import NotificationCard from "../components/NotificationCard";
import { getAllNotifications } from "../functions/NotificationFunctions";
import { getAllComments } from "../functions/PostFunctions";

const NotificationScreen = (props) => {
  const [Notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadNotifications = async () => {
    setLoading(true);
    let response = await getAllComments();
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
                console.log ("in notification screen")
                console.log(data)
                return (
                  <View>
                    <Card>
                      <NotificationCard
                        Text={data.commenter}
                      />
                    </Card>
                  </View>
                );
              }
            }}
            keyExtractor={(item, index) => index.toString()}
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
  viewStyle: {
    flex: 1,
  },
});

export default NotificationScreen;
