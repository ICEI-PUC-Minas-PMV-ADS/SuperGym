import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthContext from '../../contexts/auth';

import { Header } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import { Categories } from '../../components/Categories';
import { Exercises } from '../../components/Exercises';
import { Cart } from '../../components/Cart';
import { CATEGORIES_GET, EXERCISES_GET, TRAINING_CREATE } from '../../services/api';

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

import { Category } from '../../types/Category';

function Main() {
  const [isNameModalVisible, setisNameModalVisible] = useState(false);
  const [selectedName, setSelectedName] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const { user } = useContext(AuthContext);

  interface User {
    user_id: string;
    token: string;
  }

  useEffect(() => {
    async function getCategories() {
      if (user) {
        const userWithUserToken = user as User;
        const token = userWithUserToken.token;
        const { url, options } = CATEGORIES_GET(token);
        const response = await fetch(url, options);
        const categories = await response.json();

        setCategories(categories);
      }
    }

    async function getExercises() {
      if (user) {
        const userWithUserId = user as User;
        const userId = userWithUserId.user_id;
        const token = userWithUserId.token;
        const { url, options } = EXERCISES_GET({ token, userId });
        const response = await fetch(url, options);
        const exercises = await response.json();

        setExercises(exercises);
      }
    }

    getExercises();
    getCategories();
  }, []);

  function handleSaveName(name: string) {
    setSelectedName(name);
  }

  function handleResetTraining() {
    setSelectedName('');
    setCartItems([]);
  }

  async function handleCreateTraining(body: object) {
    const token = await AsyncStorage.getItem('Supergym:token');

    if (token) {
      const { url, options } = TRAINING_CREATE({ body, token });
      const response = await fetch(url, options);
      const training = await response.json();

      console.log(training);
    }


  }

  function handleAddToCart(exercise: Exercise) {
    if (!selectedName) {
      setisNameModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.exercise.id === exercise.id);

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
        cartItem => cartItem.exercise.id === exercise.id
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
              <Categories categories={categories} />
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
