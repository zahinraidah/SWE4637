import React from "react";
import {View, StyleSheet, Button} from "react-native";
import sem1 from '../screens/sem1';
import sem2 from '../screens/sem2';
import sem3 from '../screens/sem3';

const Semesters = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Button
        title="1st Semsester"
        color="green"
        onPress={function (){
          props.navigation.navigate(sem1);
          }
        }
      />
      <Button
        title="2nd Semsester"
        color="green"
        margin="10"
          onPress={function (){
            props.navigation.navigate(sem2);
            }
          }
      />
      <Button
        title="3rd Semsester"
        color="green"
          onPress={function (){
            props.navigation.navigate(sem3);
            }
        }
      />
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
});
export default Semesters;