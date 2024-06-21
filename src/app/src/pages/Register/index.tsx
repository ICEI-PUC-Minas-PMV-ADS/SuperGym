import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/auth';

import { Text } from '../../components/Text';

import { Container, Content, FieldContainer, Message } from './styles';

import { Input } from '../../components/Input';
import { WhiteButton } from '../../components/WhiteButton';

import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity } from 'react-native';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { create, error, loading, setError } = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  async function handleCreate() {
    create({ name, email, password });
  }

  function handleChangeName(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    setName(event.nativeEvent.text);
  }

  function handleChangeEmail(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    setEmail(event.nativeEvent.text);
  }

  function handleChangePassword(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    setPassword(event.nativeEvent.text);
  }

  function handleNavigation() {
    navigation.navigate('SignIn');
    setError('');
  }

  return (
    <Container>
      <Content>
        <Text size={24} weight="700" color='#242424'><Text size={24} color='#FFFFFF'>Super</Text>Gym</Text>
        <Message>
          <Text size={24} weight="700" color='#242424'>Cadastro</Text>
          <Text size={16} color='#FFFFFF'>Preencha os campos abaixo</Text>
        </Message>
      </Content>
      <FieldContainer>
        <Input
          secureTextEntry={false}
          keyboardType="default"
          value={name}
          onChange={handleChangeName}
          placeholder='Nome' />
        <Input
          secureTextEntry={false}
          keyboardType="email-address"
          value={email}
          onChange={handleChangeEmail}
          placeholder='Email' />
        <Input
          keyboardType='visible-password'
          value={password}
          secureTextEntry
          onChange={handleChangePassword}
          placeholder='Senha' />
        {error ? <Text style={{ marginBottom: 16 }} color='white'>{error}</Text> : null}
        {email.length === 0 || password.length === 0 || email.length === 0 ? (
          <WhiteButton color='white' disabled>Cadastre-se</WhiteButton>
        ) : (
          <WhiteButton loading={loading} onPress={handleCreate}>Cadastre-se</WhiteButton>
        )
        }
      </FieldContainer>

      <TouchableOpacity onPress={handleNavigation} style={{ alignItems: 'center' }}>
        <Text weight='700'>voltar</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default Register;
