import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import { getDataJSON, mergeData, storeDataJSON } from "../functions/AsyncStorageFunctions";
import NotificationCard from "../components/NotificationCard";

const LikeCommentButton = ({ postID, likes, navigateFunc }) => {
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
                let data = await getDataJSON(JSON.stringify(postID));
                let data2 = JSON.parse(data)
                data2.likes = likes + 1
                await storeDataJSON(JSON.stringify(postID), JSON.stringify(data2))
              }
              else {
                setCount(count - 1);
                setIcon("like2");
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
