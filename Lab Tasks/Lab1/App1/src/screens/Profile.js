import React from "react";
import { Text, View, StyleSheet} from "react-native";
const Profile = () => {
  return (
    <View style={styles.viewStyle}>
        <Image
                height = "300"
                width = "200"
                alignItems = "center"
                source = {require ('../../assets/Singles_38.jpg')}
                style={{width: 100, height: 100}}
        />
        <Text style = {styles.textStyle}>
            Name: Zahin Raidah Maisha{"\n"}
            Student ID: 170042032{"\n"}
            Room No: 406 Utility Building{"\n"}
            Email: zahinraidah@iut-dhaka.edu
        </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
    marginVertical: 30,
  },
  viewStyle: {
    alignItems: "center"
  },
});
export default Profile;