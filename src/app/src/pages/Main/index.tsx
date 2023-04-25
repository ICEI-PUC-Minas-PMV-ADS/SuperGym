import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import { Categories } from '../../components/Categories';
import { Exercises } from '../../components/Exercises';
import { Cart } from '../../components/Cart';

import {
  Container,
  CategoriesContainer,
  ExercisesContainer,
  CenteredContainer
} from './styles';

import { Button } from '../../components/Button';
import ClientNameModal from '../../components/ClientNameModal';
import { CartItem } from '../../types/CartItem';
import { Exercise } from '../../types/Exercise';
import { ActivityIndicator } from 'react-native';

import { exercises as mockExercises } from '../../mocks/exercises';

function Main() {
  const [isNameModalVisible, setisNameModalVisible] = useState(false);
  const [selectedName, setSelectedName] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading] = useState(false);
  const [exercises] = useState<Exercise[]>(mockExercises);

  function handleSaveName(name: string) {
    setSelectedName(name);
  }

  function handleResetTraining() {
    setSelectedName('');
    setCartItems([]);
  }

  function handleAddToCart(exercise: Exercise) {
    if (!selectedName) {
      setisNameModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.exercise._id === exercise._id);

      if (itemIndex < 0) {
        return prevState.concat({
          series: 1,
          exercise
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        series: item.series + 1
      };

      return newCartItems;

    });
  }

  function handleRemoveToCart(exercise: Exercise) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.exercise._id === exercise._id
      );

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.series === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        series: item.series - 1
      };

      return newCartItems;
    });
  }


  return (
    <>
      <Container>
        <Header
          selectedName={selectedName}
          onCancelTraining={handleResetTraining} />

        {isLoading &&
          (
            <CenteredContainer>
              <ActivityIndicator size="large" color="#25C26E" />
            </CenteredContainer>
          )
        }

        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories />
            </CategoriesContainer>

            <ExercisesContainer>
              <Exercises
                exercises={exercises}
                onAddToCart={handleAddToCart} />
            </ExercisesContainer>
          </>
        )}

        <FooterComponent>
          {!selectedName ?
            (
              <Button disabled={isLoading} onPress={() => setisNameModalVisible(true)}>Novo Treino</Button>
            )
            :
            (
              <Cart
                cartItems={cartItems}
                onAdd={handleAddToCart}
                onRemove={handleRemoveToCart}
                onConfirmTraining={handleResetTraining}
              />
            )}
        </FooterComponent>

      </Container>

      <ClientNameModal
        onClose={() => setisNameModalVisible(false)}
        visible={isNameModalVisible}
        onSave={handleSaveName} />
    </>

  );
}

export default Main;
