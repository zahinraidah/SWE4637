import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { AuthContext } from "../providers/AuthProvider";
// import { getDataJSON, storeDataJSON } from "../functions/AsyncStorageFunctions";

import { addNotifications } from "../functions/NotificationFunctions";

import * as firebase from "firebase";
import "firebase/firestore";

const LikeCommentButton = ({ postID, likes, navigateFunc }) => {
  const [icon, setIcon] = useState("like2");
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            type="outline"
            title={`Like (${likes})`}
            icon={<AntDesign name={icon} size={24} color="dodgerblue" />}
            onPress={async function () {
              if (icon == "like2") {
                firebase
                  .firestore()
                  .collection('posts')
                  .doc(postID)
                  .update({
                    likes: likes + 1,
                  })
                  .then(() => {
                    setIcon("like1");
                  });
                  firebase
                      .firestore()
                      .collection('users')
                      .doc(firebase.auth().currentUser.uid)
                      .update({
                        notifications: firebase.firestore.FieldValue.arrayUnion({
                          ID: Math.random().toString(36).substring(7), 
                          sender: auth.CurrentUser.displayName,
                          receiver: auth.CurrentUser.uid,
                          created_at: firebase.firestore.Timestamp.now(),
                          type: "like",
                        }),
                      })
                      .catch((error) => {
                        alert(error);
                      });
              }
              else {
                console.log("like1");
                firebase
                  .firestore()
                  .collection('posts')
                  .doc(postID)
                  .update({
                    likes: likes - 1,
                  })
                  .then(() => {
                    setIcon("like2")
                  });
              }
            }}
          />
          <Button
            type="outline"
            icon={<FontAwesome name="comment" size={24} color="dodgerblue" />}
            title=" Comment"
            onPress={() => {
              navigateFunc();
            }}
          />
        </View>
      )}
    </AuthContext.Consumer>
  );
};

export default LikeCommentButton;
