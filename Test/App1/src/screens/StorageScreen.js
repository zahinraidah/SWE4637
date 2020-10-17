import React from "react";
import { Text, View, Button, AsyncStorage } from "react-native";

const StorageScreen = () => {
  const setData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      alert("Data Saved Successfully!");
    } catch (error) {
      alert(error);
    }
  };

  const setDataJSON = async (key, value) => {
    try {
      value = JSON.stringify(value);
      await AsyncStorage.setItem(key, value);
      console.log("Data Saved Successfully!");
    } catch (error) {
      alert(error);
    }
  };

  const getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data != null) {
        alert(data);
      } else {
        alert("No data assigned to this key");
      }
    } catch (error) {
      alert(error);
    }
  };

  const getDataJSON = async (key) => {
    try {
      let data = await AsyncStorage.getItem(key);
      if (data != null) {
        data = JSON.parse(data);
        console.log(data);
      } else {
        console.log("No data assigned to this key");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log("Data Removed Successfully");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View>
      <Text>Storage Screen</Text>
      <Button
        title="Save Data"
        onPress={function () {
          setDataJSON("CourseInfo", {
            ID: "CSE 4637",
            Program: "SWE",
            CourseName: "Web And Mobile App Dev",
          });
        }}
      />

      <Button
        title="Retrieve Data"
        onPress={function () {
          getDataJSON("CourseInfo");
        }}
      />

      <Button
        title="Delete Data"
        onPress={function () {
          removeData("CourseInfo");
        }}
      />
    </View>
  );
};

export default StorageScreen;
