import React from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { SignLink, LinkText } from './styles';

export default function SignUp() {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>Sign-up</Text>
      <SignLink
        onPress={() => {
          navigate('SignIn');
        }}>
        <LinkText>Já tem conta?</LinkText>
      </SignLink>
    </View>
  );
}
