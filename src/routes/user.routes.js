/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import User from '~/pages/User';
import Message from '~/pages/User/Message';
import Setting from '~/pages/User/Setting';

const Tab = createBottomTabNavigator();

export default function UserRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Profile"
        component={User}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Message}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="message-circle" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
