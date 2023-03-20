import React, { useContext } from 'react';
import { Container, Content, Wrapper, TrainingHeader, Name } from './styles';
import { Text } from '../../components/Text';
import { TouchableOpacity } from 'react-native';


import AuthContext from '../../contexts/auth';

interface HeaderProps {
  selectedName: string;
  onCancelTraining: () => void;
}

export function Header({ selectedName, onCancelTraining }: HeaderProps) {
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
  }

  return (
    <Container>
      {!selectedName ? (
        <>
          <Wrapper>
            <Content>
              <Text size={14} opacity={0.9}>Bem-vindo(a) ao</Text>
              <Text size={24} weight="700">
                SUPER
                <Text size={24}>GYM</Text>
              </Text>
            </Content>
            <TouchableOpacity onPress={handleLogout}>
              <Text weight='600' color='#d73035'>sair do app</Text>
            </TouchableOpacity>
          </Wrapper>

        </>
      ) : (
        <Content>
          <TrainingHeader>
            <Text weight='700' size={24}>Novo treino</Text>
            <TouchableOpacity onPress={onCancelTraining}>
              <Text weight='600' color='#d73035'>cancelar treino</Text>
            </TouchableOpacity>
          </TrainingHeader>

          <Name>
            <Text color='#666'>{selectedName}</Text>
          </Name>
        </Content>
      )}

    </Container>
  );
}
