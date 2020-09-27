import React from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native';

const HomeScreen = (props)=>{
    //console.log(props);
    //console.log(require('../../assets/error1.png'));
    return (
        <View>
            <Text style = {styles.textStyle}>HomeScreen</Text>
            <Button
                title="List Screen"
                onPress={function (){
                    props.navigation.navigate("List");
                    console.log ("Button Pressed");
                    // something is probably wrong here
                    }
                }
            />
            <Image
                height = "300"
                width = "200"
                //source = {require('../../assets/error1.png')} // some error here
                source = {require ('../../assets/error1.png')}
                source={{uri: 'https://picsum.photos/200/300'}}
            />
        </View>
        );
};

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color:'blue',
        },
    }
);

export default HomeScreen;