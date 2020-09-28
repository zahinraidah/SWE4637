//npm install @react-navigation/native @react-navigation/stack
//expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import ListScreen from './src/screen/ListScreen';
import ImageScreen from './src/screen/ImageScreen';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="HomeScreen">
        <stack.Screen name="HomeScreen" component= {HomeScreen} />
        <stack.Screen name="ListScreen" component= {ListScreen}/>
        <stack.Screen name="ImageScreen" component= {ImageScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;