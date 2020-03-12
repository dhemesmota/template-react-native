import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';

export default function Message() {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages Screen</Text>
      <Button
        title="Go to new message"
        onPress={() => {
          navigate('NewMessage');
        }}
      />
    </View>
  );
}
