import React from "react";
import {View} from "react-native";
import {Button} from "react-native-elements";
import { AntDesign} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const LikeCommentButton = (props) => {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button
                type="outline"
                title="  Like (17)"
                icon={<AntDesign name="like2" size={24} color="dodgerblue" />}
            />
            <Button type="solid" title="Comment (10)"
                onPress={() => navigation.navigate('PostScreen')}
            />
        </View>
    );
};

export default LikeCommentButton;