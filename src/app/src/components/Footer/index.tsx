import React from 'react';

import { Footer, FooterContainer } from './styles';

interface FooterProps {
  children: JSX.Element | boolean;

}

export function FooterComponent({ children }: FooterProps) {

  return (
    <Footer>
      <FooterContainer>
        {children}
      </FooterContainer>
    </Footer>
  );
}
