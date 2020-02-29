import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';

import SignIn from './routes/auth.routes';
import DashboardRoutes from './routes/dashboard.routes';

const Stack = createStackNavigator();

export default function Routes({ initialRoute }) {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      headerMode="none"
      screenOptions={{
        headerStyle: { backgroundColor: '#5667f9' },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={DashboardRoutes} />
    </Stack.Navigator>
  );
}

Routes.propTypes = {
  initialRoute: PropTypes.string.isRequired,
};
