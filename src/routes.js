import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './routes/auth.routes';
import DashboardRoutes from './routes/dashboard.routes';

const Stack = createStackNavigator();

export default function Routes(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="SignIn"
        component={AuthRoutes}
        options={{ animationEnabled: false }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Home"
        component={DashboardRoutes}
        options={{ animationEnabled: false }}
      />
    </Stack.Navigator>
  );
}
