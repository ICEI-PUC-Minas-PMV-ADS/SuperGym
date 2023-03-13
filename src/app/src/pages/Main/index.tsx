import React from 'react';


import { Header } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import { Categories } from '../../components/Categories';
import { Exercises } from '../../components/Exercises';

import {
  Container,
  CategoriesContainer,
  ExercisesContainer,
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

      <FooterComponent />
    </>

  );
}

export default Main;
