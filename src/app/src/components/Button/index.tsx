import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

import { Text } from '../Text';

interface ButtonProps {
  children: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
}

export function Button({ children, onPress, disabled, loading, color }: ButtonProps) {
  return (

    <>
      {loading ? (
        <Container onPress={onPress} disabled={true}>
          <ActivityIndicator color="white" />
        </Container>

      ) :
        <Container onPress={onPress} disabled={disabled}>
          <Text weight='700' color={color ? color : 'white'}>{children}</Text>
        </Container>
      }
    </>


  );
}
