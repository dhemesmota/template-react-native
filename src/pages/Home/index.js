import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to user"
        onPress={() => {
          navigate('User', { screen: 'Settings' });
        }}
      />
    </Container>
  );
}
