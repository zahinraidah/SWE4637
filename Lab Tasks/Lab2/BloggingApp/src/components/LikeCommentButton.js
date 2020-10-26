import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const LikeCommentButton = (props) => {
    const [count, setCount] = useState([0]);
    const title="  Like ("+ count +")"
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button
                type="outline"
                title={title}
                icon={<AntDesign name="like2" size={24} color="dodgerblue" />}
                onPress={function () {
                    setCount(count + 1);
                  }}
            />
            <Button
                type="solid"
                title="Comment (10)"
                onPress={() => navigation.navigate('PostScreen', { postId: 1 })}
            />
        </View>
    );
};

export default LikeCommentButton;