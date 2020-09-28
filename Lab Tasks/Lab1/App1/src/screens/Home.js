import React from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
                <Text style = {styles.textStyle}>My Profile{"\n"}</Text>
            </TouchableOpacity>
            <Button
                title="Semesters"
                onPress={function (){props.navigation.navigate(Semesters);}}
                style = {styles.buttonStyle}
            />
            <Button
                title="Faculty List"
                onPress={function (){props.navigation.navigate(FacultyList);}}
                style = {styles.buttonStyle}
            />
        </View>
        );
};


const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color:'blue',
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
            color: "green",
        }
    }
);

export default Home;