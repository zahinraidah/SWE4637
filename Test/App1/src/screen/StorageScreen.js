import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
const StorageScreen = (props) => {
  let func = async()=> {
    /*await function (){
      let i=0;
      for (i=0; i < 1000000000; i++){}
      alert ("Done");
    }
  };*/
  const setData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key,value);
      alert ("Data Saved!!!");
    } catch (error){
      alert (error);
    }
  }
  const getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data!= null){
        alert (data)
      }
      else {
        alert ("No Data")
      }
      alert ("Data Saved!!!");
    } catch (error){
      alert (error);
    }
  }
  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      alert ("Data Removed!!!");
    } catch (error){
      alert (error);
    }
  }
  const setDataJSON = async (key, value) => {
    try {
      value = JSON.stringify(value)
      await AsyncStorage.setItem(key,value);
      console.log ("Data Saved!!!");
    } catch (error){
      alert (error);
    }
  }
  const getDataJSON = async (key) => {
    try {
      let data = await AsyncStorage.getItem(key);
      if (data!= null){
        JSON.parse(data);
        console.log(data);
      }
      else {
        alert ("No Data")
      }
      alert ("Data Saved!!!");
    } catch (error){
      alert (error);
    }
  }
  return (
      <View>
          <Text>Storage Screen</Text>
          <Button
          title="Save Data"
          onPress={function(){
            setData('CourseCode', 'SWE 4637');
            /*setDataJSON('CourseInfo', 
            {
              ID: 'SWE 4637', 
              Program: 'SWE', 
              Name: 'Mobile Dev'
            });*/
          }}
          />
          <Button
          title="Get Data"
          onPress={function(){
            getData('CourseCode');
            //getData('CourseInfo');
          }}
          />
          <Button
          title="Remove Data"
          onPress={function(){
            removeData('CourseCode');
            //removeData('CourseInfo');
          }}
          />
      </View>
    )
  };
};
export default StorageScreen;