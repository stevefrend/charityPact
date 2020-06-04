import * as React from 'react';
import { SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { useQuery } from '@apollo/react-hooks';
import { queries } from '../../Queries';

const mockGroups = [
  {
    groupName: 'Coworkers',
    amount: 150,
    goalName: 'Meditate',
    deadline: Date.now(),
    users: ['Jae', 'Steve', 'Charlie', 'Brianna'],
  },
  {
    groupName: 'Friends',
    amount: 500,
    goalName: 'Run a mile',
    deadline: Date.now(),
    users: ['Jae', 'Steve', 'Charlie'],
  },
  {
    groupName: 'Family',
    amount: 1000,
    goalName: 'Floss',
    deadline: Date.now(),
    users: ['Charlie', 'Steve'],
  },
];

const Home: React.FC<any> = ({ navigation }) => {
  const { data, loading, error } = useQuery(queries.GET_GROUPS, { variables: { userId: 'a0a74650-052d-49be-bffd-3a87c600cf2e'}})
  console.log(data, loading, error)

  if (loading) {    
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </SafeAreaView>
    );
  } else {
    const buttons = data.getGroups.map((group: any, index: any) => {
      return (
        <Button
          onPress={() => {
            navigation.navigate('GroupDashboard', { groupId: group.id });
          }}
          key={index + group.groupName}
        >
          <Text small>{group.groupName}</Text>
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
            {buttons}
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
  }
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
  color: ${(props: any) => (props.primary ? 'violet' : 'white')};
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
  margin-bottom: 10px;
`;

export default Home;
