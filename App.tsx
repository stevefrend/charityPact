import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/home/Home';
import GroupDashboard from './views/group-dashboard/GroupDashboard';
import Login from './views/login/Login';
import SignUp from './views/signup/SignUp';
import Setup from './views/setup/Setup';
import { AppRegistry } from 'react-native';
import  ApolloClient  from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const Stack = createStackNavigator();
const client = new ApolloClient({ uri: 'http://localhost:4000/graphql'});



function App() {
  
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='GroupDashboard' component={GroupDashboard} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Sign Up' component={SignUp} />
          <Stack.Screen name='Setup' component={Setup} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
AppRegistry.registerComponent('Charity Pact', () => App);

export default App;
