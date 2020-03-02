import React, { useRef } from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

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

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('E-mail inválido')
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.tron.log(data);

      formRef.current.setErrors({});
      formRef.current.reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);

        console.tron.warn(err);
      }
    }
  }
  return (
    <Container>
      <Content>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: '100%' }}>
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
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() =>
                formRef.current.getFieldRef('password').focus()
              }
            />
            <Input
              placeholder="Sua senha"
              icon="lock"
              name="password"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => formRef.current.submitForm()}
            />

            <SignLink
              onPress={() => {
                navigate('SignUp');
              }}>
              <LinkText>Cria uma conta</LinkText>
            </SignLink>

            <Button
              style={{ marginTop: 40 }}
              type="submit"
              onPress={() => formRef.current.submitForm()}>
              Entrar
            </Button>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
}
