import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const sem2 = () => {
    const courses = [
        { name: "Hum 4247: Accounting" },
        { name: "Hum 4249: Business Psychology and Communications" },
        { name: "Math 4241 Integral Calculus and Differential Equations" },
        { name: "CSE 4203 Discrete Mathematics" },
        { name: "CSE 4205 Digital Logic Design" },
        { name: "SWE 4201: Object Oriented Concepts I" },
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
export default sem2;