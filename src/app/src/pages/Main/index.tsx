import React from 'react';


import { Header } from '../../components/Header';

import { Container, CategoriesContainer, ExercisesContainer, FooterContainer } from './styles';

function Main() {


  return (
    <Container>
      <Header />
      <CategoriesContainer></CategoriesContainer>
      <ExercisesContainer></ExercisesContainer>
      <FooterContainer></FooterContainer>
    </Container>
  );
}

export default Main;
