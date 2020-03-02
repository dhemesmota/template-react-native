import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

// import { Container } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function User() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
