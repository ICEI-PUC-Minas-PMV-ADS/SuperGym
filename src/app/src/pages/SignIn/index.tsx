import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth';
import { Container, Content, FieldContainer, Message, ButtonContainer } from './styles';

import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Text } from '../../components/Text';
import { FieldText } from '../../components/FieldText';
import { WhiteButton } from '../../components/WhiteButton';

function SignIn() {
  const { signIn, error } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  async function handleSignIn() {
    await signIn({ email, password });
  }

  function handleChangeEmail(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    setEmail(event.nativeEvent.text);

  }

  function handleChangePassword(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    setPassword(event.nativeEvent.text);
  }

  return (
    <Container>
      <Content>
        <Text size={24} weight="700" color='#242424'><Text size={24} color='#FFFFFF'>Super</Text>Gym</Text>
        <Message>
          <Text size={24} weight="700" color='#242424'>Seja bem-vindo!</Text>
          <Text size={16} color='#FFFFFF'>Faça o login para continuar</Text>
        </Message>
      </Content>
      <FieldContainer>
        <FieldText
          keyboardType="email-address"
          value={email}
          onChange={handleChangeEmail}
          placeholder='username@email.com'></FieldText>
        <FieldText
          keyboardType='visible-password'
          value={password}
          onChange={handleChangePassword}
          placeholder='************'></FieldText>
        {error && <Text style={{ marginBottom: 16 }} color='white'>{error}</Text>}
        <WhiteButton onPress={handleSignIn}>Entrar</WhiteButton>
      </FieldContainer>

      <ButtonContainer>
        <WhiteButton onPress={() => navigation.navigate('Register')}>Cadastra-se</WhiteButton>
      </ButtonContainer>
    </Container>
  );
}

export default SignIn;
