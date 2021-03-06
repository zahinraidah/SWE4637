import React from "react";
import {View, StyleSheet, Button} from "react-native";
import sem1 from '../screens/sem1';
import sem2 from '../screens/sem2';
import sem3 from '../screens/sem3';

const Semesters = (props) => {
  return (
    <View style={styles.viewStyle}>
      <View style = {styles.buttonStyle}>
        <Button
          title="1st Semsester"
          onPress={function (){
            props.navigation.navigate("sem1");
            }
          }
          color="green"
        />
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="2nd Semsester"
            onPress={function (){
              props.navigation.navigate("sem2");
              }
            }
          color="green"
        />
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="3rd Semsester"
            onPress={function (){
              props.navigation.navigate("sem3");
              }
          }
          color="green"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: "blue",
    marginVertical: 30,
  },
  viewStyle: {
      margin: 100,
      alignItems: 'center'
  },
  buttonStyle: {
    margin: 5,
},
});
export default Semesters;