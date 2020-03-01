import React, { useRef } from 'react';
import { ScrollView } from 'react-native';

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

export default function SignUp() {
  const formRef = useRef(null);
  const { navigate } = useNavigation();

  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <Container>
      <Content>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: '100%' }}>
          <Img source={Logo} />
          <Title>Bem-vindo ao SuaLogo</Title>
          <Subtitle>Criar conta</Subtitle>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              placeholder="Digite seu nome completo"
              icon="user"
              name="name"
              type="text"
              autoCompleteType="name"
              autoFocus
              returnKeyType="next"
            />
            <Input
              placeholder="Digite seu e-mail"
              icon="mail"
              name="email"
              type="email"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <Input
              placeholder="Sua senha"
              icon="lock"
              name="password"
              type="password"
              secureTextEntry
              returnKeyType="next"
            />
            <Input
              placeholder="Confirme sua senha"
              icon="lock"
              name="password_confirmation"
              type="password"
              secureTextEntry
              returnKeyType="send"
            />

            <SignLink
              onPress={() => {
                navigate('SignIn');
              }}>
              <LinkText>Já tenho conta</LinkText>
            </SignLink>

            <Button
              style={{ marginTop: 40 }}
              type="submit"
              onPress={() => formRef.current.submitForm()}>
              Cadastrar
            </Button>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
}
