import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  border: 2px solid
    ${props => (props.error ? 'rgba(202, 61, 61, 0.3)' : '#28272c')};
  padding: 0 15px;
  border-radius: 5px;

  margin-bottom: ${props => (props.error ? '30px' : '20px')};

  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#757575',
})`
  flex: 1;
  color: #757575;
  font-size: 14px;
  margin-left: 10px;
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Error = styled.Text`
  font-size: 11px;
  font-weight: 300;
  color: rgba(2020, 61, 61, 0.5);
  position: absolute;
  left: 0;
  bottom: -20px;
`;
