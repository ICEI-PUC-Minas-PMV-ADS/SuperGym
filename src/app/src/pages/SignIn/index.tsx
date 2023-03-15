import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';
import { Container, Content, FieldContainer, Message, ButtonContainer } from './styles';

import { Text } from '../../components/Text';
import { FieldText } from '../../components/FieldText';
import { WhiteButton } from '../../components/WhiteButton';

function SignIn() {
  const { signed, signIn } = useContext(AuthContext);

  console.log(signed);

  async function handleSignIn() {
    signIn();
  }

  return (
    <Container>
      <Content>
        <Text size={24} weight="700" color='#242424'><Text size={24} color='#FFFFFF'>Super</Text>Gym</Text>
        <Message>
          <Text size={24} weight="700" color='#242424'>Seja bem-vindo!</Text>
          <Text size={16} color='#FFFFFF'>faça o login para continuar</Text>
        </Message>
      </Content>
      <FieldContainer>
        <FieldText placeholder='username@email.com'></FieldText>
        <FieldText placeholder='************'></FieldText>
        <WhiteButton onPress={handleSignIn}>Entrar</WhiteButton>
      </FieldContainer>
      <ButtonContainer>
        <WhiteButton onPress={() => null }>Cadastra-se</WhiteButton>
      </ButtonContainer>
    </Container>
  );
}

export default SignIn;
