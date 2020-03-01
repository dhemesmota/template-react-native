import React from 'react';
import { StatusBar } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '~/pages/Home';
import UserRoutes from '~/routes/user.routes';

const Drawer = createDrawerNavigator();

export default function DashboardRoutes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5667f9" />
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="slide"
        hideStatusBar={false}
        screenOptions={{
          drawerPosition: 'left',
        }}
        drawerStyle={{
          backgroundColor: '#19181f',
        }}
        drawerContentOptions={{
          activeTintColor: '#FFF',
          inactiveTintColor: '#757575',
          activeBackgroundColor: 'rgba(86,103,249,0.1)',
        }}>
        <Drawer.Screen
          name="Home"
          options={{
            title: 'Dashboard',
          }}
          component={Home}
        />
        <Drawer.Screen name="User" component={UserRoutes} />
      </Drawer.Navigator>
    </>
  );
}
