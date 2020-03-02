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

export default function SignUp() {
  const formRef = useRef(null);
  const { navigate } = useNavigation();

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('O e-mail é obrigatório'),
        password: Yup.string()
          .min(6, 'No mínimo 6 caracteres')
          .required('A senha é obrigatória'),
        password_confirmation: Yup.string().when(
          'password',
          (password, field) =>
            password
              ? field
                  .required('Confirmação de senha é óbrigatória')
                  .oneOf(
                    [Yup.ref('password')],
                    'A confirmação de senha deve ser igual a nova senha',
                  )
              : field,
        ),
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
              onSubmitEditing={() =>
                formRef.current.getFieldRef('email').focus()
              }
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
              onSubmitEditing={() =>
                formRef.current.getFieldRef('password').focus()
              }
            />
            <Input
              placeholder="Sua senha"
              icon="lock"
              name="password"
              type="password"
              secureTextEntry
              returnKeyType="next"
              onSubmitEditing={() =>
                formRef.current.getFieldRef('password_confirmation').focus()
              }
            />
            <Input
              placeholder="Confirme sua senha"
              icon="lock"
              name="password_confirmation"
              type="password"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => formRef.current.submitForm()}
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
