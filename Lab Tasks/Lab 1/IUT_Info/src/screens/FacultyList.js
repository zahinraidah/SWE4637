import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const FacultyList = () => {
    const teachers = [
        { name: "Tasnim Ahmed" },
        { name: "Sabbir Ahmed" },
        { name: "Bakhtiar Hasan" },
        { name: "Mohayeminul Islam" },
        { name: "Tajkia Rahman Toma" },
        { name: "Ridwan Kabir" },
        { name: "Ridwan Karim Sony" },
      ];
      return (
        <View style={styles.viewStyle}>
          <FlatList
            showsVerticalScrollIndicator = {false}
            data={teachers}
            renderItem={function ({ item }) {
              return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
          />
        </View>
      );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: "black",
    marginVertical: 30,
  },
  viewStyle: {
    margin: 50,
    alignSelf: 'center'
},
});
export default FacultyList;