import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import sem1 from './src/screens/sem1';
import sem2 from './src/screens/sem2';
import sem3 from './src/screens/sem3';
import FacultyList from './src/screens/FacultyList';
import Semesters from './src/screens/Semesters';



const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component= {Home} />
        <stack.Screen name="Profile" component= {Profile}/>
        <stack.Screen name="FacultyList" component= {FacultyList}/>
        <stack.Screen name="Semesters" component= {Semesters}/>
        <stack.Screen name="1st Semester" component= {sem1}/>
        <stack.Screen name="2nd Semester" component= {sem2}/>
        <stack.Screen name="3rd Semester" component= {sem3}/>
      </stack.Navigator>
     
    </NavigationContainer>
  );
}

export default App;