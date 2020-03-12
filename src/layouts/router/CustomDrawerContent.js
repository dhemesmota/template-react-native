import React from 'react';
import { ImageBackground, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

// import { Container } from './styles';
import Background from '~/assets/background.png';
import Profile from '~/assets/profile.png';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={Background}
        style={{
          width: undefined,
          padding: 16,
          paddingTop: 48,
          marginTop: -4,
        }}>
        <Image
          source={Profile}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 3,
            borderColor: '#FFF',
          }}
        />
        <Text
          style={{
            color: '#FFF',
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 8,
          }}>
          Dhemes Mota
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon color="#fff" size={20} name="mail" />
          <Text style={{ color: '#FFF', marginLeft: 10 }}>Mensagens</Text>
        </View>
      </ImageBackground>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        icon={({ color }) => <Icon color={color} size={20} name="power" />}
      />
    </DrawerContentScrollView>
  );
}
