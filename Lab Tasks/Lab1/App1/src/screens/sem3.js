import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const sem3 = () => {
    const courses = [
        { name: "Math 4341: Linear Algebra" },
        { name: "CSE 4303: Data Structures" },
        { name: "CSE 4305: Computer Organization and Architecture" },
        { name: "CSE 4307: Database Management System" },
        { name: "CSE 4309: Theory of Computing" },
        { name: "SWE 4301: Object Oriented Concepts II" },
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
    margin: 50,
    alignSelf: 'center'
},
});
export default sem3;