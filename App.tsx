import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/home/Home';
import GroupDashboard from './views/group-dashboard/GroupDashboard';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen name='Test' component={Test} /> */}
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='GroupDashboard'
          component={GroupDashboard}
          options={{
            // headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button onPress={() => alert('This is a button!')} title='Edit' color='black' />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
