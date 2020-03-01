import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';
import UserRoutes from '~/routes/user.routes';

const Stack = createStackNavigator();

export default function DashboardRoutes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5667f9" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#5667f9' },
          headerTintColor: '#ffffff',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen name="User" component={UserRoutes} />
      </Stack.Navigator>
    </>
  );
}
