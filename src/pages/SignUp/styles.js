import { Platform } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #19181f;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  color: #757575;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 30px;
`;

export const Img = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
`;

export const SignLink = styled.TouchableOpacity`
  align-items: flex-end;
  width: 100%;
`;

export const LinkText = styled.Text`
  font-size: 15px;
  color: #5667f9;
  font-weight: bold;
`;
