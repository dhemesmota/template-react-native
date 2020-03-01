import React, { useRef } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import Logo from '~/assets/logo/logo.png';
import Button from '~/components/Button';
import Input from '~/components/Form/Input';

import {
  Container,
  Content,
  Title,
  Subtitle,
  Img,
  SignLink,
  LinkText,
} from './styles';

export default function SignIn() {
  const formRef = useRef(null);
  const { navigate } = useNavigation();

  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <Container>
      <Content>
        <Img source={Logo} />
        <Title>Bem-vindo ao SuaLogo</Title>
        <Subtitle>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Subtitle>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            placeholder="Digite seu e-mail"
            icon="mail"
            name="email"
            type="email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input
            placeholder="Sua senha"
            icon="lock"
            name="password"
            type="password"
            secureTextEntry
          />

          <SignLink
            onPress={() => {
              navigate('SignUp');
            }}>
            <LinkText>Esqueceu sua senha?</LinkText>
          </SignLink>

          <Button
            style={{ marginTop: 40 }}
            type="submit"
            onPress={() => formRef.current.submitForm()}>
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
