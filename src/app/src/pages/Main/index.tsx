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

import { Button } from '../../components/Button';
import ClientNameModal from '../../components/ClientNameModal';


function Main() {

  return (
    <>
      <Container>
        <ClientNameModal />
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <ExercisesContainer>
          <Exercises />
        </ExercisesContainer>
      </Container>

      <FooterComponent>
        <Button onPress={() => alert('Novo Treino!')}>Novo Treino</Button>
      </FooterComponent>


    </>

  );
}

export default Main;
