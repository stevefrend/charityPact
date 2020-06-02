import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

const GroupDashboard: React.FC<any> = ({ route, navigation }) => {
  const { groupName } = route.params;
  console.log(groupName)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text title> Hello there</Text>
    </SafeAreaView>
  );
};

const Text = styled.Text`
  color: ${(props) => (props.primary ? 'violet' : 'white')};
  font-family: 'AvenirNext-Regular';

  ${({ title, small, large }) => {
    switch (true) {
      case title:
        return 'font-size: 32px';
      case large:
        return 'font-size: 26px';
      case small:
        return 'font-size: 20px';
    }
  }}
`;
export default GroupDashboard;
