import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  const signedIn = false;
  return (
    <NavigationContainer>
      <Routes initialRoute={signedIn ? 'Home' : 'SignIn'} />
    </NavigationContainer>
  );
}
