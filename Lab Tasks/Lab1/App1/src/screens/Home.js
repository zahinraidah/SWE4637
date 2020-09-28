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
            <Text style = {styles.textStyle}>Department of CSE{"\n"}Program: SWE</Text>
            <TouchableOpacity onPress={function (){props.navigation.navigate(Profile);}}>
                <Text style = {styles.textStyle}>My Profile</Text>
            </TouchableOpacity>
            <Button
                title="Semesters"
                onPress={function (){
                    props.navigation.navigate(Semesters);
                    //console.log ("Button Pressed");
                    }
                }
            />
            <Button
                title="Faculty List"
                onPress={function (){
                    props.navigation.navigate(FacultyList);
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
            textAlign: "center",
        },
        imageStyle: {
            height: 400,
            width: 250,
            alignSelf: 'center',
        },
        viewStyle: {
            margin: 50
        }
    }
);

export default Home;