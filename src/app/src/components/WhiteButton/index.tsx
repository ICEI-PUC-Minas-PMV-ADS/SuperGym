import React from 'react';

import { Container } from './styles';

import { Text } from '../Text';
import { ActivityIndicator } from 'react-native';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function WhiteButton({ children, onPress, disabled, loading }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      {!loading && (
        <Text weight='700' color='#25C26E'>{children}</Text>
      )}

      {loading && (
        <ActivityIndicator />
      )}
    </Container>
  );
}
