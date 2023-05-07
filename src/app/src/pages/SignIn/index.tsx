import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth';
import { Container, Content, FieldContainer, Message, ButtonContainer } from './styles';

import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { WhiteButton } from '../../components/WhiteButton';

function SignIn() {
  const { signIn, error, loading, setError } = useContext(AuthContext);
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

  function handleNavigation() {
    navigation.navigate('Register');
    setError('');
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
        <Input
          secureTextEntry={false}
          keyboardType="email-address"
          value={email}
          onChange={handleChangeEmail}
          placeholder='username@email.com' />
        <Input
          secureTextEntry
          keyboardType='default'
          value={password}
          onChange={handleChangePassword}
          placeholder='************' />
        {error && <Text style={{ marginBottom: 16 }} color='white'>{error}</Text>}

        {email.length === 0 || password.length === 0 ? (
          <WhiteButton color='#25C26E' disabled>Entrar</WhiteButton>
        ) : (
          <WhiteButton loading={loading} onPress={handleSignIn}>Entrar</WhiteButton>
        )
        }
      </FieldContainer>

      <ButtonContainer>
        <WhiteButton onPress={handleNavigation}>Cadastra-se</WhiteButton>
      </ButtonContainer>
    </Container>
  );
}

export default SignIn;
