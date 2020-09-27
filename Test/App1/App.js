//npm install @react-navigation/native @react-navigation/stack
//expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import ListScreen from './src/screen/ListScreen';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component= {HomeScreen} />
        <stack.Screen name="List" component= {ListScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;