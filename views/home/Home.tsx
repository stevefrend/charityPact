import * as React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

// Flesh this out later
interface Props {
  navigation: Object;
}
const mockGroups = [
  {
    groupName: 'Coworkers',
    goalName: 'Meditate',
    deadline: Date.now(),
    users: ['Jae', 'Steve', 'Charlie', 'Brianna'],
  },
  {
    groupName: 'Friends',
    goalName: 'Run a mile',
    deadline: Date.now(),
    users: ['Jae', 'Steve', 'Charlie'],
  },
  { groupName: 'Family', goalName: 'Floss', deadline: Date.now(), users: ['Charlie', 'Steve'] },
];

const Home: React.FC<any> = ({ navigation }) => {
  const buttons = mockGroups.map((group, index) => {
    return (
      <Button
        onPress={() => {
          navigation.navigate('GroupDashboard');
        }}
      >
        <Text small>Hey</Text>
      </Button>
    );
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <Text primary title>
            Welcome, Username
          </Text>
        </Header>
        <Divider />
        <Groups>
          <Text primary large>
            Groups
          </Text>
          {/* dynamically render buttons in here once we get data*/}
          <Button
            onPress={() => {
              console.log('hit');
              navigation.navigate('GroupDashboard');
            }}
          >
            <Text small>Hey</Text>
          </Button>
        </Groups>
        <Footer>
          <Button
            onPress={() => {
              navigation.navigate('Setup');
            }}
          >
            <Text large>ADD GROUP</Text>
          </Button>
        </Footer>
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  padding: 0 5%;
  margin-bottom: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Groups = styled.View`
  flex: 1;
  align-items: center;
  background-color: slategray;
  margin: 20px 0;
  padding-top: 10px;
  border-radius: 15px;
`;
const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

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

const Divider = styled.View`
  border-bottom-color: violet;
  border-bottom-width: 2px;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  width: 90%;
  padding: 8px;
  background-color: lightpink;
  border-radius: 10px;
`;

export default Home;