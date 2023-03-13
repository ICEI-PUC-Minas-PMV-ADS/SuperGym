import React, { useContext } from 'react';
import { Container, Wrapper } from './styles';
import { Text } from '../../components/Text';
import { Button } from 'react-native';


import AuthContext from '../../contexts/auth';

export function Header() {
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
  }

  return (
    <Container>
      <Wrapper>
        <Text size={14} opacity={0.9}>Bem-vindo(a) ao</Text>
        <Text size={24} weight="700">
          SUPER
          <Text size={24}>GYM</Text>
        </Text>
      </Wrapper>
      <Button onPress={handleLogout} title='sair do app' />
    </Container>
  );
}
