import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import StorageScreen from "./src/screens/StorageScreen";
import StateScreen from "./src/screens/StateScreen";
import BoxScreen from "./src/screens/BoxScreen";
import InputScreen from "./src/screens/InputScreen";
const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="List" component={ListScreen} />
        <stack.Screen name="Image" component={ImageScreen} />
        <stack.Screen name="Storage" component={StorageScreen} />
        <stack.Screen name="State" component={StateScreen} />
        <stack.Screen name="Box" component={BoxScreen} />
        <stack.Screen name="Input" component={InputScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
