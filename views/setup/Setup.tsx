import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text, TextInput, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Setup: React.FC<any> = ({  navigation }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());
  

  function Separator() {
    return <View style={styles.separator} />;
  }

  const onChange = (event, selectedDate) => {
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
          defaultValue={text}
        />
        <Separator />
        <TextInput
          style={{ height: 40 }}
          placeholder='Enter Group Goal'
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Separator />
        <TextInput
          style={{ height: 40 }}
          placeholder='Select Charity'
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Separator />
        <TextInput
          style={{ height: 40 }}
          placeholder='Add Users'
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Separator />
        <Text style={{ height: 40, color: 'lightgrey' }}> Set End Date </Text>
        <DateTimePicker testID='dateTimePicker' value={date} onChange={onChange} />
        <CreateButton>
          <Text>Create Group</Text>
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
  justify-content: center;
  padding: 0 5%;
  margin-bottom: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
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
  width: 90%;
  padding: 8px;
  background-color: lightpink;
  border-radius: 10px;
`;

export default Setup;
