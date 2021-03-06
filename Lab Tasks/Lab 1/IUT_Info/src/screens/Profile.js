import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";
const Profile = () => {
  return (
    <View style={styles.viewStyle}>
        <Image
                source = {require ('../../assets/profile.jpg')}
                style={styles.imageStyle}
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
    fontSize: 18,
    color: "black",
    margin: 20,
    alignSelf: "center",
  },
  viewStyle: {
    margin: 50,
    alignSelf: "center"
  },
  imageStyle: {
    height: 260,
    width: 260,
    alignSelf: 'center',
},
});
export default Profile;