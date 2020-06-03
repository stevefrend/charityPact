import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

const GroupDashboard: React.FC<any> = ({ route, navigation }) => {
  const { groupName } = route.params;
  console.log(groupName);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <Text title>{groupName}</Text>
        </Header>
        <Divider />
        <Info>
          <InfoBox>
            <Text small>Stake:</Text>
            <Text small>500</Text>
          </InfoBox>
          <Divider primary />
          <InfoBox>
            <Text small>Charity:</Text>
            <Text small>Red Cross</Text>
          </InfoBox>
        </Info>
        <Players>
          <Text primary large>
            Players
          </Text>          
        </Players>
        <Footer>
          <Button
            onPress={() => {
              navigation.navigate('NAME OF BRIANNAS COMPONENT');
            }}
          >
            <Text large>EDIT GROUP</Text>
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

const Info = styled.View`
  flex: 1;
  background-color: lightgray;
  margin: 20px 0;
`;

const InfoBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: lightblue;
  /* padding: 5px; */
  padding: 5px 50px;
`;


const Players = styled.View`
  flex: 4;
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
  color: ${(props) => (props.primary ? 'white' : 'black')};
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
  border-bottom-color: ${(props) => (props.primary ? 'black' : 'white')};
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

export default GroupDashboard;
