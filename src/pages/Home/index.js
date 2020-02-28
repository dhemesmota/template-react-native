import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to user"
        onPress={() => {
          navigate('User', { screen: 'Settings' });
        }}
      />
    </View>
  );
}
