import React from 'react';
import { Container, Content, Image, ButtonContainer } from './styles';

import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button } from '../../components/Button';
import { Text } from '../../components/Text';

function Dashboard() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Container>
      <Content>
        <Text size={24} weight="700"><Text size={24} weight="700" color='#E89416'>Envie os seus  treinos</Text> de onde você estiver.</Text>
        <Text style={{ marginTop: 16 }} size={16}><Text color='#25C26E' weight='700'>Conecte-se</Text> com os seus clientes.</Text>
      </Content>
      <Image source={require('../../assets/images/homem.png')} />
      <ButtonContainer>
        <Button onPress={() => navigation.navigate('SignIn')}>Login / Cadastre-se</Button>
      </ButtonContainer>

    </Container>

  );
}

export default Dashboard;
