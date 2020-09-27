import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const uni = [{name: "BUET",}, 
                {name: "KUET",}, 
                {name: "CUET",}, 
                {name: "RUET",}, 
                {name: "DUET",}]
    const uni_1 = "BUET";
    const uni_2 = "IUT";
    const uni_3 = "DU";
    const uni_4 = "RUET";
    const uni_5 = "CUET";
    const uni_6 = "SUST";
    const uni_7 = "IBA DU";
    const uni_8 = "IUB";

    return(
        <View style ={styles.viewStyle}>
            <FlatList
            data = {uni}
            renderItem = {function(item){
                return (
                    <Text style = {styles.textStyle}>{item.name} </Text>
                )
            }}
            />
            /*<Text>{uni_1}</Text>
            <Text>{uni_2}</Text>
            <Text>{uni_3}</Text>
            <Text>{uni_4}</Text>
            <Text>{uni_5}</Text>
            <Text>{uni_6}</Text>
            <Text>{uni_7}</Text>
            <Text>{uni_8}</Text>*/
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: "blue",
            marginVertical:30,
        },
        viewStyle: {
            borderColor: "red",
            borderWidth: 5
        }
    }
);

export default ListScreen;