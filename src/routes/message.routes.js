import React from 'react';
import { View, Text, Easing } from 'react-native';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Message from '~/pages/User/Message';

const New = () => {
  return (
    <View>
      <Text>Nova mensagem</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const closeConfig = {
  animation: 'timing',
  config: {
    duration: 100,
    easing: Easing.linear,
  },
};

export default function MessageRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Messages"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
      }}
      headerMode="float"
      animation="fade">
      <Stack.Screen name="Messages" component={Message} />
      <Stack.Screen
        name="NewMessage"
        component={New}
        options={{ title: 'Nova Mensagem' }}
      />
    </Stack.Navigator>
  );
}
