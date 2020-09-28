import React from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props)=>{
    //console.log(props);
    //console.log(require('../../assets/error1.png'));
    return (
        <View>
            <Text style = {styles.textStyle}>HomeScreen</Text>
            <Button
                title="List Screen"
                onPress={function (){
                    props.navigation.navigate("ListScreen");
                    //console.log ("List Button Pressed");
                    }
                }
            />
            <Button
                title="Image Screen"
                onPress={function (){
                    props.navigation.navigate("ImageScreen");
                    console.log ("Image Button Pressed");
                    }
                }
            />
            <TouchableOpacity onPress={function (){console.log ("Button Pressed");}}>
                <Image
                    //source = {require ('../../assets/error1.png')} // some error here
                    source={{uri: 'https://reactjs.org/logo-og.png'}}
                    style={{width: 100, height: 100}}
                />
            </TouchableOpacity>
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