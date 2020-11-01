import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import { getDataJSON, mergeData, storeDataJSON } from "../functions/AsyncStorageFunctions";

const LikeCommentButton = ({ postID, likes, navigateFunc }) => {
  const [Notification, setNotification] = useState([]);
  const [count, setCount] = useState(likes);
  const [icon, setIcon] = useState("like2");
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            type="outline"
            title={`Like (${count})`}
            icon={<AntDesign name={icon} size={24} color="dodgerblue" />}
            onPress={async function () {
              if (icon == "like2") {
                setCount(count + 1);
                setIcon("like1")
                let data = JSON.parse(await getDataJSON(JSON.stringify(postID)))
                data.likes = likes + 1
                await storeDataJSON(JSON.stringify(postID), JSON.stringify(data))

                setNotification([
                  auth.CurrentUser.username +
                    "-notification-" +
                    Math.random().toString(36).substring(7),
                ]);
                let currentNotification = {
                  notificationID: Notification,
                  reciever: data.name,
                  sender: auth.CurrentUser.name,
                  type: "like"
                };

                storeDataJSON(
                  JSON.stringify(Notification),
                  JSON.stringify(currentNotification)
                );
                let UserData2 = await getDataJSON(JSON.stringify(Notification));
                console.log(UserData2);
              }
              else {
                setCount(count - 1);
                setIcon("like2");
                let data = JSON.parse(await getDataJSON(JSON.stringify(postID)))
                data.likes = likes - 1
                await storeDataJSON(JSON.stringify(postID), JSON.stringify(data))
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
