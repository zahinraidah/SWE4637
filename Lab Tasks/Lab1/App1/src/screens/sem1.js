import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const sem1 = () => {
    const courses = [
        { name: "Hum 4145: Islamiat" },
        { name: "Hum 4147: Technology, Environment and Society" },
        { name: "Math 4141 Geometry and Differential Calculus" },
        { name: "Phy 4143: Physics II" },
        { name: "CSE 4107: Structured Programming I" },
        { name: "SWE 4101: Introduction to Software Engineering" },
      ];
      return (
        <View style={styles.viewStyle}>
          <FlatList
            showsVerticalScrollIndicator = {false}
            data={courses}
            renderItem={function ({ item }) {
              return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
          />
        </View>
      );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "black",
    marginVertical: 30,
  },
  viewStyle: {
      alignItems: "center"
  },
});
export default sem1;