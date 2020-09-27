import React from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native';

const HomeScreen = (props)=>{
    //console.log(props);
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
                source = {require('../../assets/error1.png')}
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