import React from 'react';

import { Container } from './styles';

import { Text } from '../Text';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

export function WhiteButton({ children, onPress, disabled }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight='700' color='#25C26E'>{children}</Text>
    </Container>
  );
}
