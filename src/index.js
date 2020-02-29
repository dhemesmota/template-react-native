import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  const signedIn = true;
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#5667f9" />
      <Routes initialRoute={signedIn ? 'Home' : 'SignIn'} />
    </NavigationContainer>
  );
}
