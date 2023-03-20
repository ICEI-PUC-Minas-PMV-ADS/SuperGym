import React, { useState } from 'react';

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
  const [isNameModalVisible, setisNameModalVisible] = useState(false);

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

      <FooterComponent>
        <Button onPress={() => setisNameModalVisible(true)}>Novo Treino</Button>
      </FooterComponent>

      <ClientNameModal
        onClose={() => setisNameModalVisible(false)}
        visible={isNameModalVisible} />
    </>

  );
}

export default Main;
