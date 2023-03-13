import React from 'react';


import { Header } from '../../components/Header';

import {
  Container,
  CategoriesContainer,
  ExercisesContainer,
  Footer,
  FooterContainer
} from './styles';

function Main() {


  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer></CategoriesContainer>

        <ExercisesContainer></ExercisesContainer>
      </Container>

      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>

  );
}

export default Main;
