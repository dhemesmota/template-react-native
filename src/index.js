import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  const signedIn = false;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes initialRoute={signedIn ? 'Home' : 'SignIn'} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
