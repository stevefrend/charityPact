import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './views/login/Login';
import SignUp from './views/signup/SignUp';
import Home from './views/home/Home';
import Setup from './views/setup/Setup';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} />
         <Stack.Screen name='Sign Up' component={SignUp} />
         <Stack.Screen name='Home' component={Home} />  
        <Stack.Screen name='Setup' component={Setup} />                  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;