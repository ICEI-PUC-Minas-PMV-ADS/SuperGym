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

export function WhiteButton({ children, onPress, disabled, loading, color }: ButtonProps) {
  return (

    <>
      {loading ? (
        <Container onPress={onPress} disabled={true}>
          <ActivityIndicator color="#25C26E" />
        </Container>

      ) :
        <Container onPress={onPress} disabled={disabled}>
          <Text weight='700' color={color ? color : '#25C26E'}>{children}</Text>
        </Container>
      }
    </>


  );
}
