import React from 'react';
import { Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

export default function Home() {
  const { navigate, openDrawer } = useNavigation();
  return (
    <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Icon
        name="menu"
        size={20}
        color="#333040"
        onPress={() => openDrawer()}
      />
      <Text>Home Screen</Text>
      <Button
        title="Go to user"
        onPress={() => {
          navigate('User', { screen: 'Settings', user: 'Dhemes' });
        }}
      />
    </Container>
  );
}
