import React from 'react';
import {Text, StyleSheet, View, Button, Image, TouchableOpacity} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Profile from '../screens/Profile';
import Semesters from '../screens/Semesters';
import FacultyList from '../screens/FacultyList';

const Home = (props)=>{
    //console.log(props);
    //console.log(require('../../assets/error1.png'));
    return (
        <View style= {styles.viewStyle}>
                <Image
                    source={require ('../../assets/iutlogo.png')}
                    style={styles.imageStyle}
                />
            <Text style = {styles.textStyle}>Department of CSE{"\n"}Program: SWE{"\n"}{"\n"}</Text>
            <TouchableOpacity onPress={function (){props.navigation.navigate(Profile);}}>
                <Text style = {styles.touchStyle}>My Profile{"\n"}</Text>
            </TouchableOpacity>
            <Button
                title="Semesters"
                onPress={function (){props.navigation.navigate(Semesters);}}
                color="green"
                marginBottom="20"
                padding="30"
            />
            <Button
                title="Faculty List"
                onPress={function (){props.navigation.navigate(FacultyList);}}
                color="green"
                marginTop= "20"
            />
        </View>
        );
};


const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 18,
            color:'black',
            textAlign: "center",
            margin: 20
        },
        imageStyle: {
            height: 410,
            width: 250,
            alignSelf: 'center',
        },
        viewStyle: {
            margin: 50,
            alignSelf: 'center'
        },
        buttonStyle: {
            margin: 10,
            color:'green',
        },
        touchStyle: {
            fontSize: 18,
            color:'blue',
            textAlign: "center",
            margin: 15,
            textDecorationLine: 'underline',
        },
    }
);

export default Home;