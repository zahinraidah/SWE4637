import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
const ListScreen = () => {
  const uni = [
    { name: "BUET" },
    { name: "KUET" },
    { name: "CUET" },
    { name: "RUET" },
    { name: "DUET" },
  ];
  const uni_1 = "BUET";
  const uni_2 = "IUT";
  const uni_3 = "DU";
  const uni_4 = "RUET";
  const uni_5 = "CUET";
  const uni_6 = "SUST";
  const uni_7 = "IBA DU";
  const uni_8 = "IUB";
  return (
    <View style={styles.viewStyle}>
      <FlatList
        showsVerticalScrollIndicator = {false}
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
});
export default ListScreen;