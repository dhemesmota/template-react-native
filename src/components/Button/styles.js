import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton).attrs({
  type: 'submit',
})`
  height: 50px;
  width: 100%;
  background: #5667f9;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
