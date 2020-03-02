import React from 'react';
import { useSelector } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './routes/auth.routes';
import DashboardRoutes from './routes/dashboard.routes';

const Stack = createStackNavigator();

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);
  return (
    <Stack.Navigator headerMode="none">
      {signed ? (
        <Stack.Screen name="Home" component={DashboardRoutes} />
      ) : (
        <Stack.Screen name="SignIn" component={AuthRoutes} />
      )}
    </Stack.Navigator>
  );
}
