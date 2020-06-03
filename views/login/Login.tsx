import React, { useState } from "react";
import { SafeAreaView, View, TextInput, Button, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Login: React.FC<any> = ({ navigation }) => {
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
        <View 
          style={styles.fixToText } >
          <Button
            title="Sign Up"
            onPress={() => {
              navigation.navigate('Sign Up');
                 }}
            color="#f194ff"
          />
          <Button
            title="Sign In"
            onPress={() => {
              navigation.navigate('Home');
                 }}
            color="#f194ff"
          />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
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



export default Login;