import * as React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const dummyUsers = [
  { username: 'Jae', doneToday: 'false', total: 15 },
  { username: 'Charlie', doneToday: 'false', total: 7 },
  { username: 'Brianna', doneToday: 'true', total: 20 },
  { username: 'Steve', doneToday: 'false', total: 5 },
];

const GroupDashboard: React.FC<any> = ({ route, navigation }) => {
  const { groupName } = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
          }}
        >
          <ModalView>
            <ModalBox>
              <Text title>Good job!</Text>
              <Text title style={{fontSize: 80}}>🎉</Text>            
              <Text small>You have completed today's task</Text>
              <ModalButton onPress={() => setModalVisible(false)}>
                <Text>Close</Text>
              </ModalButton>
            </ModalBox>
          </ModalView>
        </Modal>
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
          <Text title style={{ marginLeft: 142 }}>
            Players
          </Text>

          <FlatList
            data={dummyUsers}
            ListHeaderComponent={
              <View style={{ marginBottom: 10 }}>
                <PlayerRow>
                  <PlayerCell primary style={{ fontWeight: 'bold' }}>
                    Name
                  </PlayerCell>
                  <PlayerCell primary style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Done
                  </PlayerCell>
                  <PlayerCell primary style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Total
                  </PlayerCell>
                </PlayerRow>
                <Divider primary />
              </View>
            }
            renderItem={({ item, index }): any => {
              const checked =
                item.doneToday === 'true' ? (
                  <AntDesign name='checkcircleo' size={22} color='green' />
                ) : (
                  <MaterialIcons name='radio-button-unchecked' size={24} color='red' />
                );
              return (
                <PlayerRow key={item.username + index}>
                  <PlayerCell primary>{item.username}</PlayerCell>
                  <PlayerCell primary style={{ textAlign: 'center' }}>
                    {checked}
                  </PlayerCell>
                  <PlayerCell primary style={{ textAlign: 'center' }}>
                    {item.total}
                  </PlayerCell>
                </PlayerRow>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            numColumns={1}
          />
        </Players>
        <View>
          <Buttons>
            <Button
              onPress={() => {
                setModalVisible(true);
                // change user state to complete by triggering mutation to update DB, then re-render component and changes should be there
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
  /* background-color: slategray; */
  margin: 20px 0;
  padding-top: 10px;
  border-radius: 15px;
`;

const PlayerRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  justify-content: space-evenly;
  height: 30px;
`;

const PlayerCell = styled.Text`
  color: black;
  font-family: 'AvenirNext-Regular';
  width: 33%;
  /* background-color: black; */
  padding: 5px;
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


const ModalView = styled.View`
  flex: 1;
  background-color: #000000aa;
  justify-content: center;
  align-items: center;

  
`;

const ModalBox = styled.View`
  height: 400px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin: 10px;
  border-radius: 10px;
`;

const ModalButton = styled.TouchableOpacity`
  padding: 8px 50px;
  margin-top: 30px;
  background-color: lightskyblue;
  border-radius: 5px;
`;

export default GroupDashboard;
