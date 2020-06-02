import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/home/Home';
import GroupDashboard from './views/group-dashboard/GroupDashboard';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='GroupDashboard' component={GroupDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
