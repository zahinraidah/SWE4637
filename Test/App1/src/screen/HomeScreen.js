import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = (props)=>{
    //console.log(props);
    return (
        <View>
            <Text style = {styles.textStyle}>HomeScreen</Text>
            <Button
                title="List Screen"
                onPress={function (){
                    props.navigation.navigate('List');
                    conole.log ('Button Pressed');
                    }
                }
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