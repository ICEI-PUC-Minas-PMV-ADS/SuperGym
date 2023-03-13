import React from 'react';

import { Footer, FooterContainer } from './styles';

import { Button } from '../Button';

export function FooterComponent() {
  return (
    <Footer>
      <FooterContainer>
        <Button onPress={() => alert('Novo Treino!')}>Novo Treino</Button>
      </FooterContainer>
    </Footer>
  );
}
