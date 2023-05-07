import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth';

import { Text } from '../../components/Text';

import { Container, Content, FieldContainer, Message } from './styles';

import { FieldText } from '../../components/FieldText';
import { WhiteButton } from '../../components/WhiteButton';

import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity } from 'react-native';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { create, error, loading } = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  async function handleCreate() {
    create({ name, email, password });
    console.log('Erro: ', error);
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
        <FieldText
          keyboardType="default"
          value={name}
          onChange={handleChangeName}
          placeholder='Nome'></FieldText>
        <FieldText
          keyboardType="email-address"
          value={email}
          onChange={handleChangeEmail}
          placeholder='Email'></FieldText>
        <FieldText
          keyboardType='visible-password'
          value={password}

          onChange={handleChangePassword}
          placeholder='Senha'></FieldText>
        {error ? <Text style={{ marginBottom: 16 }} color='white'>{error}</Text> : null}
        {loading ? <WhiteButton disabled>Carregando...</WhiteButton> : <WhiteButton onPress={handleCreate}>Cadastra-se</WhiteButton>}
      </FieldContainer>

      <TouchableOpacity onPress={handleNavigation} style={{ alignItems: 'center' }}>
        <Text weight='700'>voltar</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default Register;
