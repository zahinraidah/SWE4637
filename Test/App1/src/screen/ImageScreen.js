import React from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native';
import ImageDetails from '../components/ImageDetails';
const ImageScreen = () => {
    return (
        <View>
            <ImageDetails title="Beach"/>
            <ImageDetails title="Forest"/>
            <ImageDetails title="Mountain"/>
        </View>
    )
}

export default ImageScreen;