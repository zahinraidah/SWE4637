import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const ImageDetails = (props) => {
    let ImageSource = undefined;
    if (props.title == "Beach"){
        ImageSource = require("../../assets/Beach.jpg");
    }
    else if (props.title == "Forest"){
        ImageSource = require("../../assets/forest.png");
    }
    else if (props.title == "Mountain"){
        ImageSource = require("../../assets/Mountain.jpg");
    }
    return (
        <View style={styles.viewStyle}>
            <Text style = {styles.textStyle}>{props.title}</Text>
            <Image style={styles.imageStyle} source = {ImageSource}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 50,
        color: "red",
    },
    imageStyle:{
        height: 100,
        width: 100,
        margin: 10,

    },
    viewStyle:{
        borderColor: "blue",
        borderWidth: 5,
        flexDirection: "row",
        alignSelf: 'center',
    },
})

export default ImageDetails;