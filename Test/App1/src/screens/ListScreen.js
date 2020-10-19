import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const uni = [
    { name: "BUET", key:"1" },
    { name: "KUET", key: "2" },
    { name: "CUET", key: "3"},
    { name: "RUET", key: "4"},
    { name: "DUET", key: "5"},
  ];


  return (
    <View style={styles.viewStyle}>
      <FlatList
        style={styles.ListStyle}
        data={uni}
        renderItem={function ({ item }) {
          //there is an error "Text strings must be rendered within a <Text> component"
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
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
    borderColor: "red",
    borderWidth: 5,
  },
  ListStyle: {},
});

export default ListScreen;
