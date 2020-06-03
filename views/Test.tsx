import * as React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const dummyUsers = [
  { username: 'Jae', doneToday: 'false', total: 15}, 
  { username: 'Charlie', doneToday: 'false', total: 7}, 
  { username: 'Brianna', doneToday: 'true', total: 20}, 
]

const Test: React.FC<any> = ({ route, navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>        
        <FlatList 
          data={dummyUsers}
          renderItem={({item, index}): any => {
            
            return(
            <PlayerRow>
              <Text>hello</Text>
              <Text>{item.username}</Text>
            </PlayerRow>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
    </SafeAreaView>
  );
};



const PlayerRow = styled.View`
  background-color: red;
  align-items: center;
  justify-content: center;
  height: 100px;
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


export default Test;
