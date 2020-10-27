import React from "react";
import { Card, Button, Input } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { View } from "react-native";
import { useLinkProps } from "@react-navigation/native";

const InputCard = (props) => {
    return (
        <View>
            <Input
                placeholder={props.Text}
                leftIcon={<Entypo name="pencil" size={24} color="black" />}
            />
            <Button title="Post" type="outline"
                onPress={props.function}
                onChangeText={props.textFunction}
                onPress={props.pressfFunction}
            />
        </View>
    );
};

export default InputCard;