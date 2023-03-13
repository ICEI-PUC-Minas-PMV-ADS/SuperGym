import React from 'react';


import { Header } from '../../components/Header';
import { Categories } from '../../components/Categories';
import { Exercises } from '../../components/Exercises';

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

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <ExercisesContainer>
          <Exercises />
        </ExercisesContainer>
      </Container>

      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>

  );
}

export default Main;
