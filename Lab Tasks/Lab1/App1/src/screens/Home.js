import React from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = (props)=>{
    //console.log(props);
    //console.log(require('../../assets/error1.png'));
    return (
        <View>
            <Image style = {styles.viewStyle}
                source={{uri: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Islamic_University_of_Technology_%28coat_of_arms%29.png'}}
            />
            <Text style = {styles.textStyle}>Department of CSE{"\n"}Program: SWE</Text>
            <TouchableOpacity onPress={function (){props.navigation.navigate("Profile");}}>
                <Text style = {styles.textStyle}>My Profile</Text>
            </TouchableOpacity>
            <Button
                title="Semester Wise Course List"
                onPress={function (){
                    props.navigation.navigate("Semesters");
                    }
                }
            />
            <Button
                title="Faculty List"
                onPress={function (){
                    props.navigation.navigate("FacultyList");
                    //console.log("Faculty List");
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
        viewStyle: {
            width: "100", 
            height: "100",
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
);

export default Home;