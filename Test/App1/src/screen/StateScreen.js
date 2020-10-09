import React, {useState}from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const StateScreen = () => {
let [counter, setCounter] = useState(0);
    return (
        <View>
            <Text style={styles.textStyle}>{counter}</Text>
            <Button
            title="Increase"
            onPress={
                function(){
                    setCounter(counter+1)
                    console.log(counter)
                }
            }
            color="red"/>
            <Button
            title="Decrease"
            onPress={
                function(){
                    setCounter(counter-1)
                    console.log(counter)
                }
            }
            color="green"/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        color:"red"
    }
})

export default StateScreen