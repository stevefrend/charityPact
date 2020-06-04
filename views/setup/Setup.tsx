import React, { useState } from 'react';
import { SafeAreaView, View, Modal } from 'react-native';
import { Text, TextInput, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Setup: React.FC<any> = ({ navigation }) => {
  const [text, setText] = useState({});
  const [date, setDate] = useState<any>(new Date().toISOString());
  const [modalView, setModalView] = useState(false);

  function Separator() {
    return <View style={styles.separator} />;
  }

  const onChange = (event: any, selectedDate: any) => {
    // selects and stores date as ISO string
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <Title>Create New Group</Title>
        </Header>
        <TextInput
          style={{ height: 40 }}
          placeholder='Enter Group Name'
          onChangeText={(text) => setText(text)}
        />
        <Separator />
        <TextInput
          style={{ height: 40 }}
          placeholder='Enter Group Goal'
          onChangeText={(text) => setText(text)}
        />
        <Separator />
        <TextInput
          style={{ height: 40 }}
          placeholder='Select Charity'
          onChangeText={(text) => setText(text)}
        />
        <Separator />
        <TextInput
          style={{ height: 40 }}
          placeholder='Add Users'
          onChangeText={(text) => setText(text)}
        />
        <Separator />
        <AddDateButton onPress={() => setModalView(true)}>
          <Text style={{color: "lightpink", fontSize: 18}}>Set End Date</Text>
        </AddDateButton>
        <Modal animationType='slide' transparent={true} visible={modalView}>
          <ModalView>            
            <DateTimePicker testID='dateTimePicker' value={date} mode='date' onChange={onChange}/>
            <ModalButton
              onPress={() => {
                setText((previousState) => {
                  return {
                    ...previousState,
                    goalDate: date,
                  };
                });
                setModalView(false);
              }}
            >
              <Text>Enter</Text>
            </ModalButton>
          </ModalView>
        </Modal>
        <CreateButton>
          {/* HERE WE NEED TO TRIGGER A MUTATION TO CREATE THE GROUP */}
          <Text style={{color: "white", fontSize: 20}}>Create Group</Text>
        </CreateButton>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  /* justify-content: center; */
  padding: 20px 5%;
  margin-bottom: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  font-size: 35px;
  color: lightpink;
  font-family: 'AvenirNext-Regular';
  padding-bottom: 20px;
`;

const CreateButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  padding: 8px;
  background-color: lightpink;
  border-radius: 10px;
`;

const AddDateButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 8px;
  background-color: azure;
  border: 1px solid lightblue;
  border-radius: 10px;
`;

const ModalView = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 200px 50px 100px;
`;

const ModalButton = styled.TouchableOpacity`
  padding: 8px 50px;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  background-color: lightskyblue;
  border-radius: 5px;
`;

export default Setup;
