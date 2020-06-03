import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const SignUp: React.FC<any> = ({ navigation }) => {
  const [text, setText] = useState('');

  function Separator() {
    return <View style={styles.separator} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Header>
          <Title >
            Charity Pact
          </Title>
        </Header>
        <Separator />
        <TextInput
          style={{height: 40, padding: 10}}
          placeholder="email"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Separator />
        <TextInput
          style={{height: 40, padding: 10}}
          placeholder="username"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Separator />
        <TextInput
          style={{height: 40, padding: 10}}
          placeholder="password"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Separator />
        <TextInput
          style={{height: 40, padding: 10}}
          placeholder="confirm password"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Separator />
        <Button
          onPress={() => {
           navigation.navigate('Home');
              }}
        >
          <Text> Sign Up </Text>
        </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
}); 

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 60px;
  color: #f194ff;
  font-family: 'AvenirNext-Regular';
  padding-bottom: 50px;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  padding: 8px;
  background-color: lightpink;
  border-radius: 10px;
`;

export default SignUp;