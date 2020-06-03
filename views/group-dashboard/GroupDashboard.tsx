import * as React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const tableStyles = StyleSheet.create({
  container: { padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});

const dummyUsers = [
  { username: 'Jae', doneToday: 'false', total: 15 },
  { username: 'Charlie', doneToday: 'false', total: 7 },
  { username: 'Brianna', doneToday: 'true', total: 20 },
];

const GroupDashboard: React.FC<any> = ({ route, navigation }) => {
  const { groupName } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <FlatList
          data={dummyUsers}
          renderItem={({ item, index }): any => {
            
            const checked = item.doneToday === "true" ? "green" : "red";
            console.log(checked, item.doneToday)
            return (
              <PlayerRow key={item.username + index}>
                <Text primary>{item.username}</Text>
                <Text primary style={{backgroundColor: checked}}>{item.doneToday}</Text>                
                <Text primary>{item.total}</Text>                
              </PlayerRow>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
        />
        <Header>
          <Text title>{groupName}</Text>
        </Header>
        <Header>
          <Text large>{} days left</Text>
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
          {/* <Table borderStyle={{borderWidth: 20, borderColor: '#c8e1ff'}}>
            <Row data={['Name', 'Daily Check', 'Total']} style={tableStyles.head} textStyle={tableStyles.text}/>
            <Rows textStyle={tableStyles.text} data={userResults} />
          </Table>  */}
        </Players>
        <View>
          <Buttons>
            <Button
              onPress={() => {
                navigation.navigate('NAME OF BRIANNAS COMPONENT');
              }}
              style={{ backgroundColor: 'lightgreen' }}
            >
              <Text large>COMPLETE FOR TODAY</Text>
            </Button>
          </Buttons>
          <Buttons>
            <Button
              onPress={() => {
                navigation.navigate('NAME OF BRIANNAS COMPONENT');
              }}
            >
              <Text small>EDIT GROUP</Text>
            </Button>
          </Buttons>
        </View>
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

const PlayerRow = styled.View`
  flex-direction: row;
  background-color: red;
  align-items: center;
  justify-content: center;
  height: 100px;
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
  background-color: slategray;
  margin: 20px 0;
  padding-top: 10px;
  border-radius: 15px;
`;

const Buttons = styled.View`
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
  background-color: lightskyblue;
  border-radius: 10px;
  margin: 5px 0;
`;

export default GroupDashboard;
