import React from "react";
import { ImagePropTypes, View } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import PostScreen from "../screens/PostScreen";

const PostCard = (props) => {
    return (
        <Card>
            <Input
                placeholder= "Add a Comment"
                leftIcon={<Entypo name="pencil" size={24} color="black" />}
            />
            <Button title="Post" type="outline" onPress={function () { }} />

        </Card>
    );
};

export default PostCard;