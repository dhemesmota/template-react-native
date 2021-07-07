import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from '~/layouts/router/CustomDrawerContent';
import Home from '~/pages/Home';
import UserRoutes from '~/routes/user.routes';

const Drawer = createDrawerNavigator();

export default function DashboardRoutes() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        initialRouteName="Home"
        drawerType="front"
        hideStatusBar
        screenOptions={{
          drawerPosition: 'left',
        }}
        drawerStyle={{
          width: 280,
        }}>
        <Drawer.Screen
          name="Home"
          options={{
            title: 'Dashboard',
            drawerIcon: ({ color }) => (
              <Icon name="user" size={20} color={color} />
            ),
          }}
          component={Home}
        />
        <Drawer.Screen
          name="User"
          component={UserRoutes}
          options={{
            title: 'Perfil',
            drawerIcon: ({ color }) => (
              <Icon name="user" size={20} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
